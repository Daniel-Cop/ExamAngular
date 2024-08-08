import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:"", component: LayoutComponent, children: [
        {path:"", component: HomeComponent},
        {path: "cart", component: CartComponent}
    ]
    },
    {path: "**", component:PageNotFoundComponent}
];
