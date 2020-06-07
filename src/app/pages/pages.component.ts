import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor(private ajustes: SettingsService) {
    this.ajustes.cargarAjustes();
  }

  ngOnInit(): void {
    init_plugins();
  }
}
