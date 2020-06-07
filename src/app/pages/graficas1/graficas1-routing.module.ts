import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Graficas1Component } from './graficas1.component';

const routes: Routes = [{ path: '', component: Graficas1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Graficas1RoutingModule {}
