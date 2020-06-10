import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import {ACTUALIZA_USUARIO, LOGIN, LOGINGOOGLE, URL_SERVICIOS, USUARIO} from '../../config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {SubirArchivoService} from "../subir-archivo/subir-archivo.service";

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient,
              private router: Router,
              private subirArchivoService: SubirArchivoService) {
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

  actualizarUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + ACTUALIZA_USUARIO + '/' + usuario._id;
    url += '?token=' + this.token;

    return this.http.put(url, usuario).pipe(
      map((res: any) => {
        const user = res.usuario;
        this.guardarStorage(user._id, this.token, user);
        Swal.fire({
          title: 'Exito!',
          text: 'Usuario actualizado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });

        return true;
      })
    );
  }

  cambiarImagen(file: File, id: string) {
    this.subirArchivoService.subirArchivo(file, 'usuarios', id)
      .then((res: any) => {
        this.usuario.img = res.usuario.img;
        this.guardarStorage(id, this.token, this.usuario);
        Swal.fire({
          title: 'Exito!',
          text: 'Imagen actualizada correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });

      })
      .catch(error => {
        console.log(error);
      });
  }

}
