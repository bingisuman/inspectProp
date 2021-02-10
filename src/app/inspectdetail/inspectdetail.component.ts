import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InspectionDetail } from 'src/models';
import { DataService, Message } from '../services/data.service';
import { DataStore, Predicates } from '@aws-amplify/datastore';

@Component({
  selector: 'app-inspectdetail',
  templateUrl: './inspectdetail.component.html',
  styleUrls: ['./inspectdetail.component.scss'],
})
export class InspectDetail implements OnInit {
  public inspectiondetail: InspectionDetail;
  inspectDetailId;

  constructor(
//    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("inspectDetail ngOnit");
    this.inspectDetailId= this.activatedRoute.snapshot.paramMap.get('inspdetid');
    console.log("inspectDetail id"+ this.inspectDetailId);

    this.getInspectionDetail();
  }
  
  async getInspectionDetail() {
      console.log("getInspectionDetail");
     await DataStore.query(InspectionDetail, c => c.id("eq",this.inspectDetailId)).
        then(message => {
        this.inspectiondetail = message[0];}) 
   }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
