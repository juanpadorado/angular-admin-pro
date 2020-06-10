import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  declarations: [PagesComponent, DashboardComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, PipesModule],
})
export class PagesModule {}
