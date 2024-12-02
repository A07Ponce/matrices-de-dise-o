import { Routes } from '@angular/router';
import { TareasCuadradosComponent } from './tareas-cuadrados/tareas-cuadrados.component';
import { TareaCardsComponent } from './tarea-cards/tarea-cards.component';

export const routes: Routes = [
    {path: 'cuadrados', component: TareasCuadradosComponent},
    {path: 'cards', component: TareaCardsComponent}
];
