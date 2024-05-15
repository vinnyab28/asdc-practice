import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';
import { TableModule } from 'primeng/table';
import { Router, RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TableModule, RouterOutlet, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(response => {
      this.products = response ?? [];
    })
  }

  onShowProduct() {
    this.router.navigate(["product-details", this.selectedProduct?.id])
  }
}
