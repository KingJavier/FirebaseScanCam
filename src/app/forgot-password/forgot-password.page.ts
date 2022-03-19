import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage  {

  emailU = null;

  constructor(private authSvc: AuthService, private router: Router) { }

  async Reset(){
    try{
      const email = this.emailU;
      await this.authSvc.resetPassword(email);
      alert('Email de recuperacion enviado');
      this.router.navigate(['/login']);
    }catch(error){
      console.log('Error ->', error);
      alert('Correo NO REGISTRADO');
    }
  }

}
