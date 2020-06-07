import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Graficas1RoutingModule } from './graficas1-routing.module';
import { Graficas1Component } from './graficas1.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../../components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [Graficas1Component, GraficoDonaComponent],
  imports: [CommonModule, Graficas1RoutingModule, ChartsModule],
})
export class Graficas1Module {}
