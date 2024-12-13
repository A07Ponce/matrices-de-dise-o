import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaCarruselComponent } from './tarea-carrusel.component';

describe('TareaCarruselComponent', () => {
  let component: TareaCarruselComponent;
  let fixture: ComponentFixture<TareaCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
