import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as languages from '../../../../languages.json';

@Component({
  selector: 'app-mobile-device',
  templateUrl: './mobile-device.component.html',
  styleUrls: ['./mobile-device.component.scss']
})
export class MobileDeviceComponent implements OnInit {
  @Output() startGame = new EventEmitter<void>();
  animationSteps = {
    notification1: false,
    notification2: false
  };
  language: string;
  text: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.language = params.language );
    const language = languages[this.language];
    this.text = {
      n1: language.notification1,
      n2: language.notification2,
      boss: language.boss
    };
  }

  ngOnInit() {
    window.setTimeout(() => {
      this.animationSteps.notification1 = true;
    }, 1000);
    window.setTimeout(() => {
      this.animationSteps.notification2 = true;
    }, 3000);
  }

}
