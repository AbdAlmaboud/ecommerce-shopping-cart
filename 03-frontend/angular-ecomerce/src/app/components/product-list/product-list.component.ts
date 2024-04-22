import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    NgbPaginationModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})


export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElemnts: number = 5;

  previousKeyword: string = "";


  constructor(private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyeword: any = this.route.snapshot.paramMap.get('keyword');

    if(this.previousKeyword != theKeyeword){
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyeword;
    console.log(`keyword=${theKeyeword}, thePageNumber =${this.thePageNumber}`)

 

    this.productService.searchProductPaginate(this.thePageNumber-1,
                                              this.thePageSize,
                                              theKeyeword).subscribe((data) => {
                                                console.log(data);
                                                this.products = data._embedded.product_angs;
                                                this.thePageNumber = data.page.number + 1;
                                                this.thePageSize = data.page.size;
                                                this.theTotalElemnts = data.page.totalElements;
                                              });
  }

  handleListProducts() {

    const hasCatehoryId: boolean = this.route.snapshot.paramMap.has('id')

    if (hasCatehoryId) {
      this.currentCategoryId = (Number)(this.route.snapshot.paramMap.get('id'));
    }
    else {
      this.currentCategoryId = 1;
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(`current CategoryId = ${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`)



    this.productService.getProductListPaginate(this.thePageNumber - 1,
      this.thePageSize, this.currentCategoryId).
      subscribe((data) => {
        this.products = data._embedded.product_angs;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElemnts = data.page.totalElements;
      }); 

  }

  addToCart(theProduct:Product){
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);
    // TODO ... do the real work
    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }
  
 
}
