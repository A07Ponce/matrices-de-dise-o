import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaCardsComponent } from './tarea-cards.component';

describe('TareaCardsComponent', () => {
  let component: TareaCardsComponent;
  let fixture: ComponentFixture<TareaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
