import { Component, OnInit } from '@angular/core';
import { Product } from 'Product';
import { ProductAPIServiceService } from '../product-apiservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    ProductAPIService : ProductAPIServiceService;
  products: Product[] = [];

  constructor(ProductAPIService: ProductAPIServiceService) {
    this.ProductAPIService = ProductAPIService;
   }
  ngOnInit(): void {
    //pub/sub
    this.ProductAPIService
    .findProductList()
    .subscribe( resp =>{
      this.products = resp; 

    });
  }
}
