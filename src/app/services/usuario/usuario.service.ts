import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import {LOGIN, LOGINGOOGLE, URL_SERVICIOS, USUARIO} from '../../config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient,
              private router: Router) {
    this.cargarStorage();
  }

  isAuthenticate(){
     return (this.token.length > 5);
  }

  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + USUARIO;

    return this.http.post(url, usuario).pipe(
      map((res: any) => {
        Swal.fire({
          title: 'Exito!',
          text: 'Usuario creado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        return res.usuario;
      })
    );
  }

  login(usuario: Usuario, recordar: Boolean = false) {

    if (recordar){
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + LOGIN;
    return this.http.post(url, usuario).pipe(
      map((res:any) => {
        this.guardarStorage(res.id, res.token, res.usuario);
        return true;
      })
    );
  }

  loginGoogle(token: string) {
    const url = URL_SERVICIOS + LOGINGOOGLE;

    return this.http.post(url, {token}).pipe(
      map((res:any) => {
        this.guardarStorage(res.id, res.token, res.usuario);
        return true;
      })
    );
  }
}
