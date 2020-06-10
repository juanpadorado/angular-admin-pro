import { Injectable } from '@angular/core';
import {CARGAR_IMAGEN, URL_SERVICIOS} from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo(archivo: File, tipo: string, id: string) {

    return new Promise((resolve, reject) => {

      let formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('imagen', archivo, archivo.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('imagen subida');
            resolve(JSON.parse(xhr.response));
          }else {
            console.log('Fallo subida');
            reject(JSON.parse(xhr.response));
          }
        }
      }

      const url = URL_SERVICIOS + CARGAR_IMAGEN + '/' + tipo + '/' + id;

      xhr.open('PUT', url, true);
      xhr.send(formData);

    });

  }
}
