import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../shared/entities';
import { CartService } from '../../services/cart.service';
import { TaxCalcPipe } from '../../pipes/tax-calc.pipe';
import { pipe } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product?: IProduct;
  @Input() i?: number;

  cartService = inject(CartService)
  productService = inject(ProductService)

  tva = 0.2;

  addToCart(item: IProduct, index: number) {
    this.cartService.addItem(item)
    this.productService.resetQuantity(index)
  }

  increaseQty(index: number){
    this.productService.increaseQuantity(index)
  }

  reduceQty(index: number){
    this.productService.reduceQuantity(index)
  }
}
