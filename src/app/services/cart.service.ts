import { Injectable } from '@angular/core';
import { cart } from '../shared/mockCart';
import { ICartItem, IProduct } from '../shared/entities';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getTotalAmount(): number {
    return cart.totalAmount;
  }

  getItems(): ICartItem[] {
    return cart.items;
  }

  getItemsCount(): number {
    let count = 0;
    for (let item of cart.items) {
      count += item.quantity
    }
    return count;
  }

  addItem(product: IProduct) {

    // items can be added to cart just if the product quantity is higer then 0
    if (product.quantity > 0) {
      let include = false;
      for (let item of cart.items) {
        if (item.article.name === product.name) {
          include = true;
          item.quantity += product.quantity
          break;
        }
      }
      if(!include) {
        let newItem: ICartItem = {
          article: product,
          quantity: product.quantity,
        }
        cart.items.push(newItem);
      }


      cart.totalAmount += product.priceHT * product.quantity;
    }
  }

  removeItem(index: number) {
    let item = cart.items[index];
    
    cart.totalAmount -= item.article.priceHT * item.quantity;

    cart.items.splice(index, 1);
  }

}
