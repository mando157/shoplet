import { Component, inject, input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product',
  styleUrl: './product.scss',
  templateUrl: './product.html',
})
export class Product {
  public product = input.required<ProductModel>();

  public cartProductService  = inject(CartService);
}
