import { Component, signal } from '@angular/core';
import { CalculatorComponent } from './calculator-component/calculator-component';
import { CardComponent } from "./card/card";
import { Header } from './header/header';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorComponent, Header, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myCalculator');
}
