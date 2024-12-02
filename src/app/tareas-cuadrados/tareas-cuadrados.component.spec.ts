import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasCuadradosComponent } from './tareas-cuadrados.component';

describe('TareasCuadradosComponent', () => {
  let component: TareasCuadradosComponent;
  let fixture: ComponentFixture<TareasCuadradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasCuadradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasCuadradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
