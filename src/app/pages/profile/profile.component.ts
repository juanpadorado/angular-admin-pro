import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario/usuario.service";
import {Usuario} from "../../models/usuario.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagenSubir: File;
  imagenTemp : string | ArrayBuffer;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {

  }

  guardar(usuario: Usuario) {

    this.usuario.nombre = usuario.nombre;
    if (!this.usuario.google){
      this.usuario.email = usuario.email;
    }

    this.usuarioService.actualizarUsuario(this.usuario).subscribe();
  }

  seleccionImagen(archivio: File) {
    if (!archivio) {
      this.imagenSubir = null;
      return;
    }

    if (archivio.type.indexOf('image') < 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Solo se deben de cargar imagenes',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivio
    let reader = new FileReader();
    let urlImgTmp = reader.readAsDataURL(archivio);

    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  cambiarImagen() {

    this.usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

}
