import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspectDetailRoutingModule } from './inspectdetail-routing.module';
import { InspectDetail } from './inspectdetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspectDetailRoutingModule
  ],
  declarations: [InspectDetail]
})
export class InspectDetailModule {}
