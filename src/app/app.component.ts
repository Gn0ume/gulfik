import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GulfikGames';
  public playMusic() {
    new Audio('/assets/music/Jack Johnson - Rodeo Clown (minus) (mp3cut.net).mp3').play();
  }

  ngOnInit(): void {
    const audioElement: any = document.getElementById('my_audio');
    audioElement.loop = true;
    window.setTimeout(() => {
      audioElement.play();
    }, 1000);
  }
}
