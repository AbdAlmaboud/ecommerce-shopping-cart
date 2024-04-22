import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/product_angs';

  private categoryUrl = 'http://localhost:8080/api/product_category';

  constructor(private httpClient: HttpClient) { }


  

  getProduct(theProductId: number): Observable<Product> {

    
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
    })
    
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl,{headers});
  }

  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId? =${theCategoryId}`
    return this.getProducts(searchUrl);

  }


  getProductListPaginate(thePage: number, thePageSize: number
    , theCategoryId: number): Observable<GetResponseProducts> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;


      const headers=new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      })
    return this.httpClient.get<GetResponseProducts>(searchUrl,{headers});

  }

  searchProducts(theKeyeword: string): Observable<Product[]> {

    
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyeword}`
    console.log(searchUrl)
  
    return this.getProducts(searchUrl);

  }

  AddProductCategory(categoryName: String){

    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
    })
    return this.httpClient.post<string>("http://localhost:8080/rest/auth/add/Category",{
      categoryName
    },{headers}).subscribe((data) =>{
      console.log(data);
    })

  }

  
  AddProduct(sku:String,  name: String,  description:String,  unitPrice: any,  imageUrl:String,
              active: boolean,  unitsInStock: number, category:number ){
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
    })

    console.log(category);

    return this.httpClient.post<string>("http://localhost:8080/rest/auth/add/Product",{
      sku,
      name,
      description,
      unitPrice,
      imageUrl,
      active,
      unitsInStock,
      category
    },{headers}).subscribe((data) =>{
      console.log(data);
    })

  }

  searchProductPaginate(thePage: number, thePageSize: number
                          , theKeyeword: number): 
                             Observable<GetResponseProducts> {

      

    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyeword}`
                     + `&page=${thePage}&size=${thePageSize}`;

    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
    })

    return this.httpClient.get<GetResponseProducts>(searchUrl,{headers});

  }


  private getProducts(searchUrl: string): Observable<Product[]> {
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
    })
    return this.httpClient.get<GetResponseProducts>(searchUrl,{headers}).pipe(
      map(response => response._embedded.product_angs)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
    })
    return this.httpClient.get<GetResponseProductsCategory>(this.categoryUrl,{headers}).pipe(
      map(response => 
        {
          console.log(response);
          
          return response._embedded.productCategories
        })
    );
  }
}

interface GetResponseProductsCategory {
  _embedded: {
    productCategories: ProductCategory[];
  }
}

interface GetResponseProducts {
  _embedded: {
    product_angs: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }

}