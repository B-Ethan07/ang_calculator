import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-catalog-detail-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalog-detail-component.html',
  styleUrls: ['./catalog-detail-component.css']
})
export class CatalogDetailComponent implements OnInit {
  product!: Product | null;
  productId!: number;

  private route = inject(ActivatedRoute);

  private products: Product[] = [
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

ngOnInit() {
  this.route.paramMap.subscribe((params: ParamMap) => {
    const idParam = params.get('productId');
    const id = idParam ? parseInt(idParam, 10) : -1;
    this.productId = id;

    this.product = this.products.find(p => p.id === id)!;
  });
}
}
