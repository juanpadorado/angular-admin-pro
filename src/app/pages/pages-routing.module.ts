import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { titulo: 'Dashboard' },
  },
  {
    path: 'progress',
    data: { titulo: 'Progress' },
    loadChildren: () =>
      import('../pages/progress/progress.module').then((m) => m.ProgressModule),
  },
  {
    path: 'graficas1',
    data: { titulo: 'Graficas' },
    loadChildren: () =>
      import('../pages/graficas1/graficas1.module').then(
        (m) => m.Graficas1Module
      ),
  },
  {
    path: 'account-settings',
    data: { titulo: 'Ajustes del template' },
    loadChildren: () =>
      import('../pages/account-settings/account-settings.module').then(
        (m) => m.AccountSettingsModule
      ),
  },
  {
    path: 'promesas',
    data: { titulo: 'Promesas' },
    loadChildren: () =>
      import('../pages/promesas/promesas.module').then((m) => m.PromesasModule),
  },
  {
    path: 'rxjs',
    data: { titulo: 'RxJs' },
    loadChildren: () =>
      import('../pages/rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
