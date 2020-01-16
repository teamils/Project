import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOutAdviseComponent } from './transfer-out-advise.component';

describe('TransferOutAdviseComponent', () => {
  let component: TransferOutAdviseComponent;
  let fixture: ComponentFixture<TransferOutAdviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferOutAdviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferOutAdviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
