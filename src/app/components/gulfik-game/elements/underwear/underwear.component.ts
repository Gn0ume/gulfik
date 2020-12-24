import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ICoordinates, ISquare} from '../../gulfik-game';

@Component({
  selector: 'app-underwear',
  templateUrl: './underwear.component.html',
  styleUrls: ['./underwear.component.scss']
})
export class UnderwearComponent implements OnInit {
  @Input() stainCoordinates: ICoordinates;
  @Input() stainHealth: number;
  @Input() showStain: boolean;
  @Output() stainIsDisplaced = new EventEmitter<ISquare>();

  constructor() { }

  ngOnInit() {
  }

}
