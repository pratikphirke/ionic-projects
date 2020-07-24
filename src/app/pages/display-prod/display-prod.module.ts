import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayProdPageRoutingModule } from './display-prod-routing.module';

import { DisplayProdPage } from './display-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayProdPageRoutingModule
  ],
  declarations: [DisplayProdPage]
})
export class DisplayProdPageModule {}
