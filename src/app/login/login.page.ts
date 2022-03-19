import { Component } from '@angular/core';

// AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  credenciales = {
    email: null,
    password: null
  };

  constructor( public afAuth: AngularFireAuth, private authh: AuthService, private router: Router, private firestore: FirestoreService ) { }

  async login(){
    try{
      const res = await this.authh.login(this.credenciales.email, this.credenciales.password).catch( error => console.log(error));
      if (res) {
        this.router.navigate(['/logged']);
      }
    }catch(error){
      console.log('Error ->', error);
      alert('USUARIO NO REGISTRADO');
    }

  }

}
