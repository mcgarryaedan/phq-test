import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewRoutes } from './pages/overview/overview.routes';

export const routes: Routes = [
  ...OverviewRoutes
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
