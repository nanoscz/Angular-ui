import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'first', loadChildren: './components/first/first.module#FirstModule' },
  { path: 'second', loadChildren: './components/second/second.module#SecondModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
