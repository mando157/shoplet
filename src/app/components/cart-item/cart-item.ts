import { Component, inject, input } from '@angular/core';
import { ProductCartModel } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-item',
  styleUrl: './cart-item.scss',
  templateUrl: './cart-item.html',
})
export class CartItem { 
  public cartItem = input.required<ProductCartModel>();

  public cartProductService = inject(CartService);
}
