import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from "../button/button";

@Component({
  selector: 'app-search-component',
  imports: [FormsModule, Button],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css'
})
export class SearchComponent {

  studentName: string = '';
  constructor(private router: Router) {}
  onClick() {
    this.router.navigate(['students/' + this.studentName]);
    console.log(this.studentName);
  }
  onReset() {
    this.studentName = '';
    this.router.navigate(['students']);
  }
}
