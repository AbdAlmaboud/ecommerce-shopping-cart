import { Component } from '@angular/core';
import { Product } from './common/product';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductCategoryMenuComponent } from "./components/product-category-menu/product-category-menu.component";
import { SearchComponent } from "./components/search/search.component";
import { app } from '../../server';
import { CartStatusComponent } from "./components/cart-status/cart-status.component";
import { AuthService } from './services/auth.service';
import { AddComponent } from "./components/add/add.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        HttpClient,
        AuthService
    ],
    imports: [
        ProductListComponent,
        FormsModule,
        RouterLink,
        HttpClientModule,
        RouterOutlet,
        ProductCategoryMenuComponent,
        SearchComponent,
        CartStatusComponent,
        AddComponent
    ]
})
export class AppComponent {
  title = 'angular-ecommersce';
  constructor(private authService:AuthService,private router:Router){}
  onAdd(){
    this.router.navigate(['add']);
  }
    onLogout(){
        this.authService.logout();
        this.router.navigate(['login'])
    }

}
