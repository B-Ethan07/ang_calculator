import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { CalculatorComponent } from './calculator-component/calculator-component';
import { CardComponent } from './card/card';
import { CatalogComponent } from './catalog-component/catalog-component';
import { TodoComponent } from './todo-component/todo-component';

export const routes: Routes = [
    { path: 'card', component: CardComponent },
    { path: 'calculator', component: CalculatorComponent},
    { path: 'catalog', component: CatalogComponent},
    { path: 'todo', component: TodoComponent},
    { path: '', component: LandingPage}
];
