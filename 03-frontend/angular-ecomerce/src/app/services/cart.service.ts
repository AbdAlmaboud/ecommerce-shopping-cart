import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 

  cartItems: CartItem[] =[];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  

  constructor() { }

  addToCart(theCartItem : CartItem){
    let alreadyExistsInCart: boolean = false;
    let existingCartItem !: any ;

    if(this.cartItems.length>0){

      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);


      alreadyExistsInCart = (existingCartItem != undefined)
    }

    
    if(alreadyExistsInCart){
      existingCartItem.quantity++;
    } else{
      this.cartItems.push(theCartItem); 
    }

    this.computeCartTotals();

  }
  computeCartTotals() {
    let totalPriceValue : number = 0;
    let totalQuantityValue : number = 0;
    for(let currentCartItem of this.cartItems ){
     totalPriceValue +=currentCartItem.quantity * currentCartItem.unitPrice;
     totalQuantityValue +=currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);


    this.logCartData(totalPriceValue,totalQuantityValue);
  }
  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    
    console.log('contents of cart');
    for(let tempcartItem of this.cartItems){
      const subTotalPrice = tempcartItem.quantity * tempcartItem.unitPrice;
      console.log(`name: ${tempcartItem.name}, quantity = ${tempcartItem.quantity}, unitPrice${tempcartItem.unitPrice},subTotalPrice = ${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuntity: ${totalQuantityValue}`);
    console.log('--------------------------------')
  }



  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;
    if(theCartItem.quantity === 0){
      this.remove(theCartItem)
    }
    else {
      this.computeCartTotals();
    }
  }
  remove(theCartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id );

    if(itemIndex > -1){
      this.cartItems.splice(itemIndex,1);

      this.computeCartTotals();
    }
  }
}
