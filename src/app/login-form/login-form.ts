import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  email: string = '';
  password: string = '';
  formSubmitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formSubmitted = true;
      console.log(form.value);
      // Appel API ici si besoin
    }
  }


}
