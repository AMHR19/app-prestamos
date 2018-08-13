import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCobroComponent } from './nuevo-cobro.component';

describe('NuevoCobroComponent', () => {
  let component: NuevoCobroComponent;
  let fixture: ComponentFixture<NuevoCobroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoCobroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
