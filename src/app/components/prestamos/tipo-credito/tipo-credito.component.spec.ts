import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCreditoComponent } from './tipo-credito.component';

describe('TipoCreditoComponent', () => {
  let component: TipoCreditoComponent;
  let fixture: ComponentFixture<TipoCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
