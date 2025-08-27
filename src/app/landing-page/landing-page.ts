import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../button/button';


@Component({
  selector: 'app-landing-page',
  imports: [ Button ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

  constructor(private router: Router) {}

  onContinue() {
    this.router.navigate(['calculator']);
  }

}
