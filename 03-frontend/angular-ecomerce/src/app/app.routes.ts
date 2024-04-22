import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddComponent } from './components/add/add.component';

export const routes: Routes = [
    {path: 'add', component: AddComponent},
    {path: 'login', component: SignInComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'cart-details', component: CartDetailsComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    {path: 'search/:keyword', component: ProductListComponent},
    {path:'category/:id',component:ProductListComponent},
    {path:'category',component:ProductListComponent},
    {path:'products',component:ProductListComponent},
    {path:'',redirectTo: '/login',pathMatch: 'full'},
    {path:'**',redirectTo: '/',pathMatch: 'full'} 
];

