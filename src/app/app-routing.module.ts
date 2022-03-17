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
    loadChildren: () => import('./pages/Compartido/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/Compartido/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'logged',
    loadChildren: () => import('./pages/logged/logged.module').then( m => m.LoggedPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/Compartido/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./pages/Compartido/generarqr/generarqr.module').then( m => m.GenerarqrPageModule)
  },
  {
    path: 'verificacion-email',
    loadChildren: () => import('./pages/Compartido/verificacion-email/verificacion-email.module').then( m => m.VerificacionEmailPageModule)
  },
  {
    path: 'aprendiz',
    loadChildren: () => import('./pages/modulos/aprendiz/aprendiz.module').then( m => m.AprendizPageModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./pages/modulos/funcionario/funcionario.module').then( m => m.FuncionarioPageModule)
  },
  {
    path: 'gestor',
    loadChildren: () => import('./pages/modulos/gestor/gestor.module').then( m => m.GestorPageModule)
  },
  {
    path: 'invitado',
    loadChildren: () => import('./pages/modulos/invitado/invitado.module').then( m => m.InvitadoPageModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./pages/modulos/seguridad/seguridad.module').then( m => m.SeguridadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
