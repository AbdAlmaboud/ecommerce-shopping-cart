import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css',
  providers:[]
})
export class CartDetailsComponent {

  cartItems: CartItem[]=[];
  totalPrice:number=0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService){

  }

  ngOnInit():void{

    this.listcartDetails();
  }
  listcartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(
      date => this.totalPrice=date
    );

    this.cartService.totalQuantity.subscribe(
      date => this.totalQuantity=date
    );

    this.cartService.computeCartTotals();

  }

  incrementQuantity(theCartItem: CartItem){
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem){

    this.cartService.decrementQuantity(theCartItem);

  }

  remove(theCartItem: CartItem){

    this.cartService.remove(theCartItem);

  }


}
