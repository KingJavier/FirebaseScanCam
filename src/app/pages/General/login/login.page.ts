import { Component, OnInit } from '@angular/core';

// AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  form: FormGroup;

  credenciales = {
    email: null,
    password: null
  };

  correo: string;

  constructor(
    public afAuth: AngularFireAuth,
    private authh: AuthService,
    private firestore: FirestoreService,
    private router: Router,
    private fb: FormBuilder)   {
     this.form = this.fb.group(
       {
         email: ['', [Validators.email, Validators.required]],
       });
   }
   get email(){
     return this.form.get('email');
   }

   ngOnInit() {
  }

  async login(){
    try{
      const res = await this.authh.login(this.credenciales.email, this.credenciales.password).catch( error => console.log(error));
      if (res && res.user.emailVerified) {
        const path = 'Usuarios';
        const id = res.user.uid;
          this.firestore.getDoc<any>(path, id).forEach(resp => {
            console.log(resp);
            if (resp.rol === 'aprendiz' ) {
              this.router.navigate(['/logged']);
            }
            else if (resp.rol === 'funcionario') {
              this.router.navigate(['/logged']);
              return;
            }
            else if (resp.rol === 'invitado') {
              this.router.navigate(['/logged']);
              return;
            }
          });
        console.log('res =>', res);
        // this.router.navigate(['/logged']);
    } else if(res){
      this.router.navigate(['/verificacion-email']);
    }
      this.credenciales = {
          email: null,
          password: null
    };
    }catch(error){
      console.log('Error ->', error);
      alert('Error al acceder');
    }

  }


}
