import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [
    NgbPaginationModule,
    CommonModule,
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css',
  providers: [ProductService]
})
export class CartStatusComponent {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor( private cartService: CartService){}

  ngOnInit():void{
    this.updateCartStatus();
  }
  updateCartStatus() {
    this.cartService.totalPrice.subscribe(
      data =>this.totalPrice = data
    );
    this.cartService.totalQuantity.subscribe(
      data =>this.totalQuantity = data
    );
  }

}
