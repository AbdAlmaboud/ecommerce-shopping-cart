import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone:true,
  imports:[
    CommonModule,
    HttpClientModule ,
    RouterLink  
  ],

  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers:[ ProductService]
})
export class SearchComponent implements OnInit {

  constructor(private router: Router){}
  ngOnInit(){ }

  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
}

}
