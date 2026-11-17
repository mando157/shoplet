import { Component, inject, input, model } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Product } from '../product/product';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../cart-item/cart-item';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [Product, CartItem, CurrencyPipe],
  selector: 'app-products-list',
  styleUrl: './products-list.scss',
  templateUrl: './products-list.html',
})
export class ProductsList {
  public products = input.required<ProductModel[]>();

  public category = model.required<'phone' | 'watch'>();

  public cartProductsService = inject(CartService);

  public phoneCategory() {
    this.category.update((val) => {
      val = 'phone';
      return val;
    });
  }

  public watchCategory() {
    this.category.update((val) => {
      val = 'watch';
      return val;
    });
  }
}
