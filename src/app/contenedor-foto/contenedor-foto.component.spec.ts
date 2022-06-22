import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorFotoComponent } from './contenedor-foto.component';

describe('ContenedorFotoComponent', () => {
  let component: ContenedorFotoComponent;
  let fixture: ComponentFixture<ContenedorFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
