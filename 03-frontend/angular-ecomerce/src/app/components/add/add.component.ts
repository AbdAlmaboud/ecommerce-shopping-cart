import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductCategory } from '../../common/product-category';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  providers:[ProductService]
})
export class AddComponent {

  
  productCategories: ProductCategory[]=[];
  
  Category = {
    id : 0,
    categoryName: ''
  };
  
  protected = {
    sku:'',
    name: '', 
    description:'',
    unitPrice: 0.0,
    imageUrl:'',
    active: true,
    unitsInStock: 0,
    idCategory:0
  }
  constructor(private service : ProductService  ){}
  
  ngOnInit(): void {
    this.productCategories = this.getcatogry();
  }
  
  onSubmitCategory(){
    console.log(this.Category);
    this.service.AddProductCategory(this.Category.categoryName);
  }

  onSubmitProduct(){
    console.log(this.protected);
    
    this.service.AddProduct(this.protected.sku,this.protected.name,this.protected.description,this.protected.unitPrice
      ,this.protected.imageUrl,this.protected.active,this.protected.unitsInStock,this.protected.idCategory );
  }


  getcatogry(): ProductCategory[] {
    this.service.getProductCategories().subscribe(
      data => {
        this.productCategories = data;
      }
    );
    return this.productCategories;
  }
}
