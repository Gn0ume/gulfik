import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameLogoComponent} from './components/game-logo/game-logo.component';
import {GulfikGameComponent} from './components/gulfik-game/gulfik-game.component';

const routes: Routes = [
  {path: '', component: GameLogoComponent},
  {path: 'clean/:language', component: GulfikGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
