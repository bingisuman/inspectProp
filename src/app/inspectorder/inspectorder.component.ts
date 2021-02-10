import { Component, OnInit, Input } from '@angular/core';
import { InspectionOrder } from 'src/models';

@Component({
  selector: 'app-inspectorder',
  templateUrl: './inspectorder.component.html',
  styleUrls: ['./inspectorder.component.scss'],
})
export class InspectOrderComponent implements OnInit {
  @Input() inspectorder: InspectionOrder;

  constructor() { 
    console.log("construtor inspect order");
    console.log(this.inspectorder);
  }

  ngOnInit() {
      console.log("ngonit inspect order");
      console.log(this.inspectorder);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
