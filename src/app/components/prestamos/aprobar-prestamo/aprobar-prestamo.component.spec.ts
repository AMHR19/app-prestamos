import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarPrestamoComponent } from './aprobar-prestamo.component';

describe('AprobarPrestamoComponent', () => {
  let component: AprobarPrestamoComponent;
  let fixture: ComponentFixture<AprobarPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
