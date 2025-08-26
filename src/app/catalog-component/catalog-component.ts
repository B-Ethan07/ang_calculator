import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-component',
  imports: [ CommonModule ],
  templateUrl: './catalog-component.html',
  styleUrl: './catalog-component.css'
})
export class CatalogComponent {
  products: Product[] = [
  { id: 1, name: 'Ordinateur Portable', price: 899.99, promo: true },
  { id: 2, name: 'Smartphone', price: 599.99, promo: false },
  { id: 3, name: 'Écouteurs Bluetooth', price: 79.99, promo: true },
  { id: 4, name: 'Clavier Mécanique', price: 129.99, promo: false },
  { id: 5, name: 'Souris Gamer', price: 59.99, promo: true },
  { id: 6, name: 'Écran 27 pouces', price: 249.99, promo: false },
  { id: 7, name: 'Imprimante Laser', price: 149.99, promo: false },
  { id: 8, name: 'Disque Dur Externe 1To', price: 89.99, promo: true },
  { id: 9, name: 'Station de Charge', price: null, promo: false },
  { id: 10, name: 'Webcam HD', price: 49.99, promo: false },
];



}
