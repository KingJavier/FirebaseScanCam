import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';

// modulos de AngularFire
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//FormGroup
import { ReactiveFormsModule } from '@angular/forms';

//Qr
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()), provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxQRCodeModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy,useClass: IonicRouteStrategy } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
