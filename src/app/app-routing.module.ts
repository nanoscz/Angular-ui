import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadingStrategyService } from './services/strategy/preloading-strategy.service';

const routes: Routes = [
  { path: 'first', loadChildren: './components/first/first.module#FirstModule', data: { preload: true } },
  { path: 'second', loadChildren: './components/second/second.module#SecondModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
