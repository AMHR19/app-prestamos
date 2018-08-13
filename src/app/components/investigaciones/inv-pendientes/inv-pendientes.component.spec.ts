import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvPendientesComponent } from './inv-pendientes.component';

describe('InvPendientesComponent', () => {
  let component: InvPendientesComponent;
  let fixture: ComponentFixture<InvPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
