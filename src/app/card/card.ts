import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';


@Component({
  selector: 'app-card',
  imports: [FormsModule, CommonModule, Button],
  templateUrl: './card.html',
  styleUrls: ['./card.css'] // attention à "style**Urls**"
})
export class CardComponent {
  user: User = {
    name: 'Jean Dupont',
    age: 35,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/02/12/13/16/dog-7785066_640.jpg',
    quote: ''
  };
  dataReceiveFromChild(data:any) {
    console.log(data);
  }

  showAlert() {
    alert(`Bonjour, ${this.user.name} !`);
  }
}
