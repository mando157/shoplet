import { computed, effect, Service, signal } from '@angular/core';
import { ProductCartModel, ProductModel } from '../models/product.model';

@Service()
export class CartService {
    public cartProducts = signal<ProductCartModel[]>([]);

    public totalPrice = computed(() => {
        return this.cartProducts().reduce((total, current) => {
            return total + (current.price * current.quantity)
        }, 0)
    });

    public totalItems = computed(() => {
        return this.cartProducts().reduce((total, current) => {
            return total + current.quantity;
        }, 0)
    });

    constructor() {
        let storedData = localStorage.getItem('products');
        if (storedData == null) {
            this.updateLocalstorage();
        } else {
            this.cartProducts.set(JSON.parse(storedData));
        }

        effect(() => {
            localStorage.setItem('products', JSON.stringify(this.cartProducts()));
        })
    }

    public addProductToCart(product: ProductModel) {
        let isExist = this.cartProducts().some((item) => item.id === product.id);

        this.cartProducts.update((content) => {
            if (isExist) {
                return content.map((item) => {
                    if (item.id == product.id) {
                        item.quantity++;
                        return { ...item };
                    }
                    return item;
                });
            } else {
                content.push({ ...product, quantity: 1 });
                return [...content];
            }
        });
    }

    public subtractingProductQuantity(productId: number) {

        this.cartProducts.update((content) => {
            return content.map((item) => {
                if (item.id == productId) {
                    item.quantity--;
                    return { ...item };
                }
                return item;
            }).filter((item) => item.quantity > 0);
        });
    }

    public removeProduct(productId: number) {
        this.cartProducts.update((content) => content.filter((item) => item.id != productId));
    }

    public clearCart() {
        this.cartProducts.set([]);
    }

    public updateLocalstorage() {
        localStorage.setItem('products', JSON.stringify(this.cartProducts()));
    }
}
