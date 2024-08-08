import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  service = inject(ProductService);
  productList = this.service.getProducts();
}
