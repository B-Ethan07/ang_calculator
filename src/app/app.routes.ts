import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { CalculatorComponent } from './calculator-component/calculator-component';
import { CardComponent } from './card/card';

export const routes: Routes = [
    { path: 'card', component: CardComponent },
    { path: 'calculator', component: CalculatorComponent},
    { path: '', component: LandingPage}
];
