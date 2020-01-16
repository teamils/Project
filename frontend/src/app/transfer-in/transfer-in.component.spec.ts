import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInComponent } from './transfer-in.component';

describe('TransferInComponent', () => {
  let component: TransferInComponent;
  let fixture: ComponentFixture<TransferInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
