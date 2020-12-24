import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {EHandMode} from '../../gulfik-game';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit, OnChanges {
  @Input() handModeValue: EHandMode;
  handMode: boolean;
  constructor() { }

  ngOnInit() {
    this.handMode = this.handModeValue === EHandMode.Sponge;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handMode = this.handModeValue === EHandMode.Sponge;
  }

}
