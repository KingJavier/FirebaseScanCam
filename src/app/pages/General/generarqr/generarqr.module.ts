import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { GenerarqrPageRoutingModule } from './generarqr-routing.module';

import { GenerarqrPage } from './generarqr.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    GenerarqrPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GenerarqrPage]
})
export class GenerarqrPageModule {}
