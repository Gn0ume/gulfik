import {Component, Input, OnChanges} from '@angular/core';
import {EColorClasses} from '../../gulfik-game';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnChanges {
  @Input() time: number;
  colorCLass: EColorClasses = EColorClasses.Gray;
  timeThreshold = 10;
  constructor() { }

  ngOnChanges() {
    if (this.time <= this.timeThreshold) {
      this.colorCLass = EColorClasses.Red;
    }
  }

}
