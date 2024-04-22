import { Component,OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-category-menu',
  standalone: true,
  imports: [CommonModule,
            HttpClientModule,
            RouterLink  ],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css',
  providers:[ ProductService] 
})
export class ProductCategoryMenuComponent {

  productCategories: ProductCategory[]=[];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategories();
  }
  
  ngOnChange(){
    
  }

  listProductCategories() {

    this.productService.getProductCategories().subscribe(
      data => {
        this.productCategories = data;
      }
    );
  }

}
