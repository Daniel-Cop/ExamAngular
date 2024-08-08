import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartService = inject(CartService)

  showCart() {
    document.getElementById("cart-modal")?.classList.toggle("translate-x-full")
    document.getElementById("cart-modal")?.classList.toggle("drop-shadow-[-5px_5px_5px_rgba(0,0,0,0.3)]")
  }
}
