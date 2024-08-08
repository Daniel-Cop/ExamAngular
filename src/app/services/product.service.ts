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

  addProduct(product: IProduct) {
    productsList.push(product);
  }

  deleteProduct(index: number) {
    productsList.splice(index, 1);
  }

  increaseQuantity(index: number) {
    let product = productsList[index];
    
    product.quantity++;
  }

  reduceQuantity(index: number) {
    let product = productsList[index];

    // allow reducing quantity only if the quantity is higer then 0
    if (product.quantity >0) {
      product.quantity--;
    }
  }

  resetQuantity(index: number) {
    let product = productsList[index];
    product.quantity = 0;
  }
}
