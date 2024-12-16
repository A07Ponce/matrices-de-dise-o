import { Routes } from '@angular/router';
import { TareasCuadradosComponent } from './tareas-cuadrados/tareas-cuadrados.component';
import { TareaCardsComponent } from './tarea-cards/tarea-cards.component';
import { TareaFormularioComponent } from './tarea-formulario/tarea-formulario.component';
import { TareaCarruselComponent } from './tarea-carrusel/tarea-carrusel.component';
import { Deber1Component } from './deber1/deber1.component';

export const routes: Routes = [
    {path: 'cuadrados', component: TareasCuadradosComponent},
    {path: 'cards', component: TareaCardsComponent},
    {path: 'formulario', component: TareaFormularioComponent},
    {path: 'carrusel', component: TareaCarruselComponent},
    {path: 'deber1', component: Deber1Component}
];
