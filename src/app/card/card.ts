import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'] // attention à "style**Urls**"
})
export class CardComponent {
  citation: string = '';
  name: string = 'John';
  age: number = 34;
  picture: string = 'https://cdn.pixabay.com/photo/2022/08/22/11/04/skate-7403432_960_720.jpg';

  showName() {
    return this.name;
  }

  showAge() {
    return this.age;
  }
}
