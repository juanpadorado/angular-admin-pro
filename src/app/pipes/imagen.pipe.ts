 import { Pipe, PipeTransform } from '@angular/core';
 import {IMG, URL_SERVICIOS} from "../config/config";

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICIOS + IMG;

    if (!img) {
      return url + '/usuarios/ccc';
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
        url += '/usuarios/' + img;
      break;

      case 'medico':
        url += '/medicos/' + img;
      break;

      case 'hospital':
        url += '/hospitales/' + img;
      break;

      default:
        console.log('Tipo de imagen no existe');
        url += '/usuarios/ccc';
    }

    return url;
  }

}
