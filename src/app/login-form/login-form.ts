import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  email!: string;
  password!: string;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value); // { username: '...', password: '...' }
    }
  }

  sendContact(){

  }
}
