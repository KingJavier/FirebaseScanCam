
import { Component, OnInit } from '@angular/core';

// AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { User } from '../../shared/user.interface';
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
    rol: null,
    estado: true,
  };

  id: string;


  constructor(
     public afAuth: AngularFireAuth,
     private authh: AuthService,
     private firestore: FirestoreService,
     private router: Router,
     private fb: FormBuilder)   {
      this.form = this.fb.group(
        {
          email: ['', [Validators.email, Validators.required]],
          password: ['', [Validators.required, Validators.minLength(2),
             Validators.pattern('^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[@#%$])[a-zA-Z0-9@#%$]{8,16}$')]],
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
      const res = await this.authh.registrar(this.datos).catch( error => console.log(error));
      console.log('Datos', this.datos);
      if(res){
        const path = 'Usuarios';
        this.id = res.user.uid;
        this.datos.uid = this.id;
        this.datos.password = null;
        this.authh.sendVerificationEmail();
        await this.firestore.createDoc(this.datos, path, this.id);
        this.router.navigate(['/verificacion-email']);
        // const nuevoUsuario = this.firestore.getDoc<any>(path, id);
        // console.log(nuevoUsuario);
        console.log('Exito al crear la colleción');
        this.getTipoUser();
      }
    }catch(error){
      console.log('Error->', error);
      alert('Error al Registrar');
    }
  }

  getTipoUser(){
    const path = 'Usuarios/';
    this.firestore.getDoc<User>(path, this.id).subscribe(resp =>{
      console.log('ROL:',resp );

      if(resp.rol === 'aprendiz' ){
        this.router.navigate(['/home']);
      }else if(resp.rol === 'funcionario' ){
        this.router.navigate(['/logged']);
      }else if(resp.rol === 'gestor' ){
        this.router.navigate(['/logged']);
      }else if(resp.rol === 'seguridad' ){
          this.router.navigate(['/logged']);
      }else if(resp.rol === 'invitado' ){
          this.router.navigate(['/logged']);
      }
    });

  };
}
