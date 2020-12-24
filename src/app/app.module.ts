import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GulfikGameComponent } from './components/gulfik-game/gulfik-game.component';
import { GameLogoComponent } from './components/game-logo/game-logo.component';
import { StartGameButtonComponent } from './components/start-game-button/start-game-button.component';
import { SwitcherComponent } from './components/gulfik-game/elements/switcher/switcher.component';
import { LivesComponent } from './components/gulfik-game/elements/lives/lives.component';
import { TimerComponent } from './components/gulfik-game/elements/timer/timer.component';
import { UnderwearComponent } from './components/gulfik-game/elements/underwear/underwear.component';
import { StainComponent } from './components/gulfik-game/elements/stain/stain.component';
import { GasMaskComponent } from './components/gulfik-game/elements/gas-mask/gas-mask.component';
import { SpongeComponent } from './components/gulfik-game/elements/sponge/sponge.component';
import { DetectorComponent } from './components/gulfik-game/elements/detector/detector.component';
import { MobileDeviceComponent } from './components/gulfik-game/elements/mobile-device/mobile-device.component';
import { GameOverComponent } from './components/gulfik-game/elements/game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    GulfikGameComponent,
    GameLogoComponent,
    StartGameButtonComponent,
    SwitcherComponent,
    LivesComponent,
    TimerComponent,
    UnderwearComponent,
    StainComponent,
    GasMaskComponent,
    SpongeComponent,
    DetectorComponent,
    MobileDeviceComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
