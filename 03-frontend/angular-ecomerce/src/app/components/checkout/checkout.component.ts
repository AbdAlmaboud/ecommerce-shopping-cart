import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  providers: [ProductService,CartService]

})
export class CheckoutComponent {


  checkoutFormGroup !: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;
  cartService: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        fristName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
     
      CreditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    })


    
  }


  onSubmit() {
    console.log( this.totalPrice);
    // this.totalQuantity = this.cartService.totalQuantity;
    console.log("Hanfling the submit button");
    console.log(this.checkoutFormGroup.get('customer')?.value);

  }


}
