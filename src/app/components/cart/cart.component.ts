import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { TaxCalcPipe } from '../../pipes/tax-calc.pipe';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TaxCalcPipe, DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService)
  tva = 0.2

  // call the service function to remove the item from the cart
  removeItem(index: number) {
    this.cartService.removeItem(index)
  }

  // fake alert 
  showAlert() {
    alert("Sorry, we are having technical issue.\nAt this moment is not possible to complete the transaction")
  }

  // call the service function to reset the cart
  emptyCart() {
    this.cartService.emptyCart()
  }
}
