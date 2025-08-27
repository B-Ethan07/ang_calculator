import { Product } from '../models/product';
import { Component } from '@angular/core';
import { CatalogComponent } from '../catalog-component/catalog-component';

@Component({
  selector: 'app-catalog-detail-component',
  imports: [ CatalogDetailComponent, Product ],
  templateUrl: './catalog-detail-component.html',
  styleUrl: './catalog-detail-component.css'
})
export class CatalogDetailComponent {
  // Code for the CatalogDetailComponent goes here

}
