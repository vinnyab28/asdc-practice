import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductDetailsService } from './product-details.service';
import { Product } from '../products/products.service';
import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CardModule, ButtonModule, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  constructor(private route: ActivatedRoute, private productDetailsService: ProductDetailsService) { }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.productDetailsService.getProduct(id).subscribe(response => {
        this.product = response;
      })
    })

  }
}
