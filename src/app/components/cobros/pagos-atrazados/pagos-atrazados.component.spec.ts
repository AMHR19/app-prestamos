import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosAtrazadosComponent } from './pagos-atrazados.component';

describe('PagosAtrazadosComponent', () => {
  let component: PagosAtrazadosComponent;
  let fixture: ComponentFixture<PagosAtrazadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosAtrazadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosAtrazadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
