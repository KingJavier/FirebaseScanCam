import { Component} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { user } from 'rxfire/auth';
import { User } from '../shared/user.interface';
@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage  {
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
  scannedCode = null;
  createCode: any;
   constructor(){}
 /* constructor(private barcodeScanner: BarcodeScanner, private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController) { }*/
  /**
   * create codigo Qr
   */
  public create() {

    try{
      // eslint-disable-next-line one-var
      const documento = this.datos.documento,
      nombre = this.datos.nombre,
      apellido =  this.datos.apellido,
      telefono = this.datos.telefono,
      email =  this.datos.email;

      this.createCode = `{
        "documento": "${documento}",
        "nombre": "${nombre}",
        "apellido": "${apellido}",
        "telefono": "${telefono}",
        "correo": "${email}"
      }
      `;

      console.log(this.createCode);
    }catch(error){
      console.log('Error->', error);
    }
  }

  //Borrar

  public clear() {
    this.createCode = '';
  }


}
