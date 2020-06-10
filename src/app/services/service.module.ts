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
import {SubirArchivoService} from "./subir-archivo/subir-archivo.service";

@NgModule({
  declarations: [],
  providers: [SettingsService, SharedService, SidebarService, UsuarioService, LoginGuard, SubirArchivoService],
  imports: [CommonModule, HttpClientModule],
})
export class ServiceModule {}
