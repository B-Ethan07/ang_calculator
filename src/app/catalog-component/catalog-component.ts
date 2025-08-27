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
  { id: 1, name: 'Ordinateur Portable', price: 899.99, promo: true, category: 'Informatique' },
  { id: 2, name: 'Smartphone', price: 599.99, promo: false, category: 'Téléphonie' },
  { id: 3, name: 'Écouteurs Bluetooth', price: 79.99, promo: true, category: 'Audio' },
  { id: 4, name: 'Clavier Mécanique', price: 129.99, promo: false, category: 'Périphériques' },
  { id: 5, name: 'Souris Gamer', price: 59.99, promo: true, category: 'Périphériques' },
  { id: 6, name: 'Écran 27 pouces', price: 249.99, promo: false, category: 'Écrans' },
  { id: 7, name: 'Imprimante Laser', price: 149.99, promo: false, category: 'Impression' },
  { id: 8, name: 'Disque Dur Externe 1To', price: 89.99, promo: true, category: 'Stockage' },
  { id: 9, name: 'Station de Charge', price: null, promo: false, category: 'Accessoires' },
  { id: 10, name: 'Webcam HD', price: 49.99, promo: false, category: 'Périphériques' }
];

}
