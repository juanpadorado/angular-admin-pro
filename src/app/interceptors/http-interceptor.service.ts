import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('paso por interceptor');
    return next.handle(req).pipe(
      catchError(this.handlerError)
    );
  }

  handlerError(err: HttpErrorResponse) {
    /*console.log(err);
    console.log(err.error.errors.message);*/

    if (err.status === 400) {
      Swal.fire({
        title: 'Error!',
        text: err.error.errors.message,
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }

    return throwError('Error');
  }
}
