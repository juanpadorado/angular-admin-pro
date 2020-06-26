import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario.model";
import {UsuarioService} from "../../services/usuario/usuario.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde).subscribe(
      (resp: any) => {
        this.totalRegistros = resp.totalUsuarios;
        this.usuarios = resp.usuarios;
        this.cargando = false;
      }
    );
  }

  cambiarDesde(valor: number){
    let desde = this.desde + valor;

    if (desde < 0 || desde >= this.totalRegistros){
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino: string) {

    if (termino.length == 0) {
      this.cargarUsuarios();
      return;
    }
    this.usuarioService.buscarUsuarios(termino).subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        this.cargando = false;
      }
    );
  }

}
