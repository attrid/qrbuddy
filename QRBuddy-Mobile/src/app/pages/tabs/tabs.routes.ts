import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'scan',
        loadComponent: () =>
          import('../scan/scan.page').then((m) => m.ScanPage),
      },
      {
        path: 'qrcodes',
        loadComponent: () =>
          import('../qrcodes/qrcodes.page').then((m) => m.QrcodesPage),
      },
      {
        path: 'qrcodes/qrcode/:id',
        loadComponent: () =>
          import('../qrcode/qrcode.page').then((m) => m.QrcodePage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/qrcodes',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/qrcodes',
    pathMatch: 'full',
  },
];
