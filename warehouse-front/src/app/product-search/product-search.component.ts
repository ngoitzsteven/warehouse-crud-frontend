import { Component, OnInit } from '@angular/core';
import { Product } from 'Product';
import { ProductAPIServiceService } from '../product-apiservice.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  ProductAPIService : ProductAPIServiceService;
  products: Product[] = [];

  constructor(ProductAPIService: ProductAPIServiceService) {
    this.ProductAPIService = ProductAPIService;
   }
  ngOnInit(): void {
  }

  
  
}
