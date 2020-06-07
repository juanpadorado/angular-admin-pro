import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromesasRoutingModule } from './promesas-routing.module';
import { PromesasComponent } from './promesas.component';


@NgModule({
  declarations: [PromesasComponent],
  imports: [
    CommonModule,
    PromesasRoutingModule
  ]
})
export class PromesasModule { }
