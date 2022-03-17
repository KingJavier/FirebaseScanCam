import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprendizPageRoutingModule } from './aprendiz-routing.module';

import { AprendizPage } from './aprendiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprendizPageRoutingModule
  ],
  declarations: [AprendizPage]
})
export class AprendizPageModule {}
