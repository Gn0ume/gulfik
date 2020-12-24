import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrls: ['./lives.component.scss']
})
export class LivesComponent implements OnInit {
  @Input() lives;
  livesCollection: Array<number>;
  constructor() { }

  ngOnInit() {
    this.livesCollection = new Array(this.lives);
  }

}
