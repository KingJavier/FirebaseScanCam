
import { Component, OnInit } from '@angular/core';

// AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { User } from '../shared/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Alert } from 'selenium-webdriver';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';


const checkPasswords: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  const password = group.get('password').value;
  const confirmarcontraseña = group.get('confirmarcontraseña').value;

  return password === confirmarcontraseña ? null : { notEqual: true };
};
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{
  form: FormGroup;
  datos: User = {
    uid: null,
    documento: null,
    nombre: null,
    apellido: null,
    telefono: null,
    email: null,
    password: null,
    rol: 'invitado',
  };


  constructor(
     public afAuth: AngularFireAuth, 
     private authh: AuthService, 
     private firestore: FirestoreService, 
     private router: Router, 
     private fb: FormBuilder)   {
      this.form = this.fb.group(
        {
          email: ['', [Validators.email, Validators.required]],
          password: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[@#%$])[a-zA-Z0-9@#%$]{8,16}$')]],
          confirmarcontraseña: ['',[Validators.required]],
        },{validator: checkPasswords}
      );
    }
    get email(){
      return this.form.get('email');
    }

    get password(){
      return this.form.get('password');
    }

    get confirmPassword(){
      return this.form.get('confirmarcontraseña');
    }

  logout() {
    this.afAuth.signOut();
  }

  async registrar(){
    try{
      console.log('Datos', this.datos);
      const res = await this.authh.registrar(this.datos).catch( error => console.log(error));
      if(res){
        console.log('Exito al crear el usuario');
        const path = 'register';
        const id = res.user.uid;
        this.datos.uid = id;
        this.datos.password = null;
        await this.firestore.createDoc(this.datos, path, id);
        this.router.navigate(['/login']);
      }
    }catch(error){
      console.log('Error->', error);
      alert('Error al Registrar');
    }
  }
}
