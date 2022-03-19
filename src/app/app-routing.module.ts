import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/general/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/general/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'logged',
    loadChildren: () => import('./pages/logged/logged.module').then( m => m.LoggedPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/general/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./pages/general/generarqr/generarqr.module').then( m => m.GenerarqrPageModule)
  },
  {
    path: 'verificacion-email',
    loadChildren: () => import('./pages/general/verificacion-email/verificacion-email.module').then( m => m.VerificacionEmailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
