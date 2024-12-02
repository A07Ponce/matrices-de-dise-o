import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tarea-cards',
  imports: [CardModule, ButtonModule],
  templateUrl: './tarea-cards.component.html',
  styleUrl: './tarea-cards.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TareaCardsComponent {
}
