import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfCalComponent } from './conf-cal.component';

describe('ConfCalComponent', () => {
  let component: ConfCalComponent;
  let fixture: ComponentFixture<ConfCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
