import {Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import {templateRefExtractor} from '@angular/core/src/render3';

@Component({
  selector: 'app-detector',
  templateUrl: './detector.component.html',
  styleUrls: ['./detector.component.scss']
})
export class DetectorComponent implements OnInit, OnChanges {
  beeperID: number;
  turnOffTimerID: number;
  @Input() distance: number;
  onClass: boolean;
  beeping: boolean;
  beepInterval = 1000;
  duration = 100;
  constructor() {
  }

  ngOnInit() {
    this.checkBeeping();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkBeeping();
  }

  checkBeeping(): void {
    if (this.distance <= 1) {
      this.startBeeping();
    } else {
      this.stopBeeping();
    }
  }

  beep() {
    window.clearTimeout(this.turnOffTimerID);
    this.onClass = true;
    this.turnOffTimerID = window.setTimeout(() => {
      this.onClass = false;
    }, this.duration);
    this.keepBeeping();
  }

  keepBeeping() {
    this.beeperID = setTimeout(() => {
      this.beep();
    }, this.distance * this.beepInterval);
  }

  startBeeping(){
    if (!this.beeping) {
      this.beep();
      this.beeping = true;
    }
  }

  stopBeeping() {
    this.beeping = false;
    this.onClass = false;
    window.clearTimeout(this.beeperID);
  }



}
