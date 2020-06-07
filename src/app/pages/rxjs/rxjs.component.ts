import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscripcion: Subscription;

  constructor() {
    this.subscripcion = this.regresaObservable().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('El observador Completado ');
      }
    );
  }
  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  ngOnInit(): void {}

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      const intervar = setInterval(() => {
        contador++;

        const salida = {
          valor: contador,
        };
        observer.next(salida);

        if (contador === 3) {
          clearInterval(intervar);
          observer.complete();
        }

        /* if (contador === 2) {
          //clearInterval(intervar);
          observer.error('Auxulio');
        } */
      }, 1000);
    }).pipe(
      map((resp) => {
        return resp.valor;
      }),
      filter((value, index) => {
        if (value % 2 === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
