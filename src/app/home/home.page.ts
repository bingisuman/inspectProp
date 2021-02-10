import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { DataStore, Predicates } from '@aws-amplify/datastore';

import { InspectionDetail, InspectionOrder } from "../../models";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  orders: Array<InspectionOrder>;
  subscription;
 
 // newOrder = '';

  constructor(private data: DataService) {
    console.log("HomePage Constructor")
  }

  ngOnInit() {
    this.loadOrders();
    this.subscription = DataStore.observe(InspectionOrder).subscribe(msg => {
      console.log("neworder:", msg.model, msg.opType, msg.element);
      this.loadOrders();
    });
  }

  ngOnDestroy() {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getOrders(): InspectionOrder[] {
    return this.orders;
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) { 
      this.createOrder();
    }
  }

  async createOrder() {

    const inspdet = await DataStore.save<InspectionDetail>(new InspectionDetail({
    }));
    const now = new Date().toISOString();
    await DataStore.save<InspectionOrder>(new InspectionOrder({
      propid: '158',
      inspdetid: inspdet.id,
      status: "Pending",
      creationTime: now
    }));
    this.loadOrders();
   // this.newOrder = '';
  } 

  async submitOrder(form) {
    console.log("submitOrder");
    const propid = form.controls.propertyId.value;
    console.log(propid);
    const inspdet = await DataStore.save<InspectionDetail>(new InspectionDetail({
    }));
    const now = new Date().toISOString();
    await DataStore.save<InspectionOrder>(new InspectionOrder({
      propid: propid,
      inspdetid: inspdet.id,
      status: "Pending",
      creationTime: now
    }));
    this.loadOrders();
   };

  loadOrders() {
    console.log("loadOrders");

    DataStore.query<InspectionOrder>(InspectionOrder, Predicates.ALL, {
      sort: s => s.creationTime("ASCENDING")
    }).then(messages => {
      console.log("messages");

      console.log(messages);
      this.orders = [...messages];
      console.log("orders");

      console.log(this.orders);
    })
  }

}
