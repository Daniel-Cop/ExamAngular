import { Injectable } from '@angular/core';
import { cart } from '../shared/mockCart';
import { ICartItem, IProduct } from '../shared/entities';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  // get the updated total amount of the cart (without taxes)
  getTotalAmount(): number {
    return cart.totalAmount;
  }

  // get the item list in the cart
  getItems(): ICartItem[] {
    return cart.items;
  }

  // return the total number of items in the cart
  getItemsCount(): number {
    let count = 0;
    for (let item of cart.items) {
      count += item.quantity
    }
    return count;
  }


  // add a product to the cart
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

  // remove a product from the cart
  removeItem(index: number) {
    let item = cart.items[index];
    
    cart.totalAmount -= item.article.priceHT * item.quantity;

    cart.items.splice(index, 1);
  }

  // empty the cart and reset the total amount to 0
  emptyCart() {
    cart.items = [];
    cart.totalAmount = 0;
  }
}
