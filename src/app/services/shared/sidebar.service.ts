import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/pages/dashboard',
        },
        {
          titulo: 'ProgressBar',
          url: '/pages/progress',
        },
        {
          titulo: 'Gráficas',
          url: '/pages/graficas1',
        },
        {
          titulo: 'Promesas',
          url: '/pages/promesas',
        },
        {
          titulo: 'RxJs',
          url: '/pages/rxjs',
        },
      ],
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {
          titulo: 'Usuarios',
          url: '/pages/usuarios',
        },
        {
          titulo: 'Hospitales',
          url: '/pages/hospitales',
        },
        {
          titulo: 'Médicos',
          url: '/pages/medicos',
        },
      ]
    }
  ];

  constructor() {
  }
}
