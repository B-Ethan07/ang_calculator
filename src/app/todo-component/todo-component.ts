import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Button } from '../button/button';

@Component({
  selector: 'app-todo-component',
  imports: [ FormsModule, CommonModule, Button ],
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.css'
})
export class TodoComponent {
  id: number = 1;
  newTask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newTask = input.value;
    console.log(this.newTask);
  }
  toggleDone() {
    console.log('Toggle done');
  }

}
