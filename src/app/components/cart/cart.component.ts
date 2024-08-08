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

  removeItem(index: number) {
    this.cartService.removeItem(index)
  }
}
