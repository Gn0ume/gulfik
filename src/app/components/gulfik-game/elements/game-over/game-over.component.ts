import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as languages from '../../../../languages.json';


@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  language: string;
  finalText: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.language = params.language );
    this.finalText = languages.default[this.language].game_over;
  }

  ngOnInit() {
  }

}
