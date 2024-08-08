import { Injectable } from '@angular/core';
import { IProduct } from '../shared/entities';
import { productsList } from '../shared/mockProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProducts(): IProduct[] {
    return productsList;
  }


  // create new product (CRUD create)
  // not used
  // IT DOES NOT ADD TO CART (view cart.service.ts for that)
  addProduct(product: IProduct) {
    productsList.push(product);
  }

  // delete product (CRUD delete)
  // not used
  // IT DOES NOT REMOVE FROM CART (view cart.service.ts for that)
  deleteProduct(index: number) {
    productsList.splice(index, 1);
  }

  increaseQuantity(index: number) {
    let product = productsList[index];
    
    product.quantity++;

    // little easter egg in case user is tryng to buy a big amount of fruits
    if (product.quantity === 20) {
      confirm(`Are you sure you want to buy that much ${product.name.toLowerCase()}?`)
    }
  }

  reduceQuantity(index: number) {
    let product = productsList[index];

    // allow reducing quantity only if the quantity is higer then 0
    if (product.quantity >0) {
      product.quantity--;
    }
  }

  // reset quantity of the product to 0
  resetQuantity(index: number) {
    let product = productsList[index];
    product.quantity = 0;
  }
}
