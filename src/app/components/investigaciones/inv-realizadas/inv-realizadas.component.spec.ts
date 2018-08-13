import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvRealizadasComponent } from './inv-realizadas.component';

describe('InvRealizadasComponent', () => {
  let component: InvRealizadasComponent;
  let fixture: ComponentFixture<InvRealizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvRealizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
