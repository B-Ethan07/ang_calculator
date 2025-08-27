import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [ CommonModule ],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label: string = 'Click Me';
  @Input() style: { [key: string]: string } = {};
  @Output() showLabel:EventEmitter<string> = new EventEmitter();
  sendDataToParent(): void {
    this.showLabel.emit(`label du bouton : ${this.label}`)
   }
}
