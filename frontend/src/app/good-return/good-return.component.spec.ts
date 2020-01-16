import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodReturnComponent } from './good-return.component';

describe('GoodReturnComponent', () => {
  let component: GoodReturnComponent;
  let fixture: ComponentFixture<GoodReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
