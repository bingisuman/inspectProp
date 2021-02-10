import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { InspectDetailRoutingModule } from './inspectdetail-routing.module';

import { InspectDetail } from './inspectdetail.component';

describe('InspectDetail', () => {
  let component: InspectDetail;
  let fixture: ComponentFixture<InspectDetail>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectDetail ],
      imports: [IonicModule.forRoot(), InspectDetailRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(InspectDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
