import {Component, HostListener, ViewChild, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {EGameStates, EHandMode, ICoordinates, ISquare} from './gulfik-game';
import {getRandomInt} from '../../utils';

@Component({
  selector: 'app-gulfik-game',
  templateUrl: './gulfik-game.component.html',
  styleUrls: ['./gulfik-game.component.scss']
})
export class GulfikGameComponent implements OnInit, OnChanges {
  gameState: EGameStates = EGameStates.Introduction;
  handCoordinates: ICoordinates;
  stainCoordinates: ICoordinates;
  lives: number;
  roundTime: number;
  stainsRemained: number;
  stainSquare: ISquare;
  stainHealth: number;
  stainHealthThreshold = .2;
  rubDamage = 1 / 1000;
  showMobileDevice: boolean;
  toolMode: EHandMode = EHandMode.Detector;
  showStain = false;
  handAbsoluteCoordinates: ICoordinates = {x: 0, y: 0};
  stainToToolDistance = 1;
  detectionThreshold = .1;
  detectionTime = 1000;
  detectionTimerID: number;
  roundTimerID: number;
  roundLength = 30;
  round: number;
  poisonTime = 10;
  gameIsOver: boolean;
  showGasMask: boolean;


  constructor(private router: Router) {
    this.showMobileDevice = [EGameStates.Introduction, EGameStates.Instruction].includes(this.gameState);
    this.showGasMask = this.gameState === EGameStates.Started;
    this.showStain = false;
    this.gameIsOver = false;
  }

  @ViewChild('container') container;
  @HostListener('document:touchmove', ['$event'])
  onMouseMove(e) {
    if (this.stainSquare) {
      const {clientX: x, clientY: y} = e.touches[0];
      this.handAbsoluteCoordinates = {x, y};
      if (this.toolMode === EHandMode.Detector) {
        this.calculateStainToToolDistance();
        if (this.stainToToolDistance <= this.detectionThreshold) {
          this.startDetection();
        } else {
          this.stopDetection();
        }
      } else {
        this.onRub({x, y});
      }
    }
  }

  startDetection() {
    this.detectionTimerID = window.setTimeout(() => {
      this.detectStain();
    }, this.detectionTime);
  }

  stopDetection() {
    window.clearTimeout(this.detectionTimerID);
  }

  detectStain() {
    this.changeToolMode(EHandMode.Sponge);
  }

  calculateStainToToolDistance(): void {
    const stainWidth = this.stainSquare.rb.x - this.stainSquare.lt.x;
    const centerX = this.stainSquare.lt.x + Math.round((stainWidth) / 2);
    const centerY = this.stainSquare.lt.y + Math.round((this.stainSquare.rb.y - this.stainSquare.lt.y) / 2);
    const distanceInPx = Math.sqrt(Math.pow(centerX - this.handAbsoluteCoordinates.x, 2) + Math.pow(centerY - this.handAbsoluteCoordinates.y, 2));
    this.stainToToolDistance = distanceInPx / stainWidth / 1.5;
  }

  ngOnChanges(): void {
    this.showMobileDevice = [EGameStates.Introduction, EGameStates.Instruction].includes(this.gameState);
    this.showGasMask = this.toolMode === EHandMode.Sponge;
  }

  ngOnInit() {
    this.gameState = EGameStates.Started;
    this.handCoordinates = {
      x: 50,
      y: 50
    };
    this.lives = 3;
    this.stainsRemained = 5;
    this.round = 0;
  }

  changeGameState(state: EGameStates): void {
    this.gameState = state;
    this.showMobileDevice = [EGameStates.Introduction, EGameStates.Instruction].includes(this.gameState);
  }

  changeToolMode(mode: EHandMode): void {
    this.toolMode = mode;
    this.showStain = this.toolMode !== EHandMode.Detector;
  }

  startGame(): void {
    this.gameIsOver = false;
    this.makeStain();
    this.changeGameState(EGameStates.Started);
    this.changeToolMode(EHandMode.Detector);
  }

  private makeStain(): void {
    this.stainHealth = 1;
    const generateCoordinates = (): ICoordinates => {
      return {
        x: getRandomInt(10, 90),
        y: getRandomInt(10, 90)
      };
    };
    let randomCoordinates;
    do {
      randomCoordinates = generateCoordinates();
    } while (
      randomCoordinates.x >= 40
      && randomCoordinates.x <= 62
      && randomCoordinates.y >= 60
      && randomCoordinates <= 91
    );
    this.stainCoordinates = randomCoordinates;
    this.resetRound();
  }

  resetRound() {
    window.clearTimeout(this.roundTimerID);
    this.roundTime = this.roundLength;
    this.roundTimerID = window.setInterval(() => {
      this.roundTime--;
      if (this.roundTime === 0) {
        window.clearTimeout(this.roundTimerID);
        this.gameOver();
      }
      if (this.roundTime < this.poisonTime) {
        this.container.nativeElement.classList.add('poisoned');
      } else {
        this.container.nativeElement.classList.remove('poisoned');
      }
    }, 1000 * (1 - this.round / 20));
  }

  gameOver() {
    this.gameIsOver = true;
    // this.router.navigateByUrl('');
  }

  public onStainDisplaced(square: ISquare) {
    this.stainSquare = square;
    this.calculateStainToToolDistance();
  }

  private onRub(coordinates: ICoordinates) {
    if (
      coordinates.x >= this.stainSquare.lt.x
      && coordinates.x <= this.stainSquare.rb.x
      && coordinates.y >= this.stainSquare.lt.y
      && coordinates.y <= this.stainSquare.rb.y
    ) {
      this.onStainRub();
    }
  }

  private onStainRub() {
    this.stainHealth -= this.rubDamage;
    if (this.stainHealth <= this.stainHealthThreshold) {
      this.onStainKilled();
    }
  }

  private onStainKilled() {
    this.makeStain();
    this.changeToolMode(EHandMode.Detector);
    this.round++;
  }

}
