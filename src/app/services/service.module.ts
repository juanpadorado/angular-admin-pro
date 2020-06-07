import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
} from './service.index';
import {LoginGuard} from "./guards/login.guard";

@NgModule({
  declarations: [],
  providers: [SettingsService, SharedService, SidebarService, UsuarioService, LoginGuard],
  imports: [CommonModule, HttpClientModule],
})
export class ServiceModule {}
