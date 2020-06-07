import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UsuarioService} from "../usuario/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService,
              private router: Router) {
  }

  canActivate() {
    if (this.usuarioService.isAuthenticate()){
      console.log('paso por guard');
      return true;
    }else {
      console.log('no esta auten');
      this.router.navigate(['/login']);
      return false;
    }

  }

}
