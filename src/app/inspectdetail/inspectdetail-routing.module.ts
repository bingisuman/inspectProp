import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectDetail } from './inspectdetail.component';

const routes: Routes = [
  {
    path: '',
    component: InspectDetail
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectDetailRoutingModule {}
