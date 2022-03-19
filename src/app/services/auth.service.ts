import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toastController: any;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

  }

  //metodo Olvido de contraseña

  resetPassword(email: string){
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }

  //metodo Logeo Normal

  login(correo: string, password: string){
    try{
      return this.afAuth.signInWithEmailAndPassword(correo, password);
    }catch (error) {
      console.log('Error->', error);
    }
  }

  // metodo Cerrar sesión

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }


  //metodo Registro

  registrar(data: User){
    try {
      return this.afAuth.createUserWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      console.log('Error->', error);
    }
  }
  
  requestPassword() {}

  async toastError(error: any) {
    const toast = await this.toastController.create({
      message:
        (error.message as string).split(': ')[1] || 'Algo malo ha ocurrido',
      duration: 4000,
      color: 'danger',
    });
    toast.present();
  }
}

