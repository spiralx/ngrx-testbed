import { Routes } from '@angular/router'

// ----------------------------------------------------

export const routes: Routes = [
  { path: '', redirectTo: '/captable', pathMatch: 'full' },
  {
    path: 'captable',
    loadChildren: './captable/captable.module#CaptableModule'
  }
]
