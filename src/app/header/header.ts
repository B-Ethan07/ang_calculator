import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../search-component/search-component';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    SearchComponent
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
