import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button-output',
  imports: [],
  templateUrl: './button-output.html',
  styleUrl: './button-output.css'
})
export class ButtonOutput {
  @Input() label: string = 'Click Me';
  @Output() showLabel:EventEmitter<string> = new EventEmitter();
  sendDataToParent(): void {
    this.showLabel.emit(`label du bouton : ${this.label}`)
   }
}
