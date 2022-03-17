import { Component,  } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-verificacion-email',
  templateUrl: './verificacion-email.page.html',
  styleUrls: ['./verificacion-email.page.scss'],
  providers: [AuthService]
})
export class VerificacionEmailPage {

  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService ) { }

  onSendEmail(){
    this.authService.sendVerificationEmail();
  }


}
