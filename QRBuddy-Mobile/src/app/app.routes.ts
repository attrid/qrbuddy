import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: 'qrcode',
  //   loadComponent: () => import('./pages/qrcode/qrcode.page').then( m => m.QrcodePage)
  // },
];
