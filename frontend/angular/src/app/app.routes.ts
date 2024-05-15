import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    {
        path: "users",
        component: UsersComponent
    },
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path: "products/:id",
        component: ProductDetailsComponent
    },
    {
        path: "**",
        component: HomepageComponent
    },
];
