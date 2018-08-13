import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasEmpleadosComponent } from './listas-empleados.component';

describe('ListasEmpleadosComponent', () => {
  let component: ListasEmpleadosComponent;
  let fixture: ComponentFixture<ListasEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
