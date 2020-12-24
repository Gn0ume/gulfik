import { Component, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {ISquare} from '../../gulfik-game';

@Component({
  selector: 'app-stain',
  templateUrl: './stain.component.html',
  styleUrls: ['./stain.component.scss']
})
export class StainComponent implements OnChanges {
  @Input() coordinates;
  @Input() stainHealth;
  @Output() stainDisplacedEvent = new EventEmitter <ISquare>();
  @ViewChild('stainRepresentation') stainElement;

  constructor() { }
  ngOnChanges() {
    const rect = this.stainElement.nativeElement.getBoundingClientRect();
    this.stainDisplacedEvent.emit({
      lt: {
        x: rect.left,
        y: rect.top
      },
      rb: {
        x: rect.right,
        y: rect.bottom
      }
    });
  }
}
