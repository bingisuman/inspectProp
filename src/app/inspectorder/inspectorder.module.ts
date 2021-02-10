import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InspectOrderComponent } from './inspectorder.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [InspectOrderComponent],
  exports: [InspectOrderComponent]
})
export class InspectOrderComponentModule {}
