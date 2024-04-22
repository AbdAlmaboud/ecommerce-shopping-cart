import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule ,
    RouterLink ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers:[ ProductService]
})
export class ProductDetailsComponent  implements OnInit{


  product !: Product;
  constructor(private protectService: ProductService,
                private cartService: CartService,
               private route: ActivatedRoute){

  }
  ngOnInit():void{
    this.route.paramMap.subscribe(()=>{
      this.handleProductDetails()
    })

  }
  handleProductDetails() {
 
    //get id
    const theProductId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.protectService.getProduct(theProductId).subscribe(
      date =>{
        this.product = date;

      }
    )

    console.log(this.product);
    
  
  }

  addTOCart() {
    console.log(this.product);
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);

  }
}
