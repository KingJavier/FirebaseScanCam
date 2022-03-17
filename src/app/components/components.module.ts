import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuLoggedComponent } from './menu-logged/menu-logged.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuLoggedComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    MenuComponent,
    MenuLoggedComponent
  ]
})
export class ComponentsModule { }
