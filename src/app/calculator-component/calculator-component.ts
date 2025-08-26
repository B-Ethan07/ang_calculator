import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  imports: [],
  templateUrl: './calculator-component.html',
  styleUrl: './calculator-component.css'
})
export class CalculatorComponent {
random1: number = 0;
random2: number = 0;
result?: number = 0;

  generateRandom() : number{
    return Math.floor(Math.random() * 100);
  }
  getRandom1() {
    this.random1 = this.generateRandom();
  }
  getRandom2() {
    this.random2 = this.generateRandom();
  }
  Addition(){
    this.result = this.random1 + this.random2;
  }
  Soustraction(){
    this.result = this.random1 - this.random2;
  }
  Multiplication(){
    this.result = this.random1 * this.random2;
  }
  Division(){
    this.result = this.random1 / this.random2
  }
  reset(){
    this.result = 0;
    this.random1 = 0;
    this.random2 = 0;
  }
}
