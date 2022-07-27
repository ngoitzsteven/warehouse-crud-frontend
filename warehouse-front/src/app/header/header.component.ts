import { Component, OnInit } from '@angular/core';
import { Product } from 'Product';
import {SplitButtonModule} from 'primeng/splitbutton';
import { Observable } from 'rxjs';
import { ProductAPIServiceService } from '../product-apiservice.service';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pItems!: MenuItem[];
  wItems!: MenuItem[];
  product : Product = new Product();
  
  constructor(private ProductAPIService:ProductAPIServiceService) { }
  

  ngOnInit(): void {
    this.pItems = [
      {label: 'Add', icon:'pi pi-plus' , command: () =>{
        this.addProduct();
      } },
      {label: 'Delete', icon:'pi pi-minus-circle' , command: () =>{
        this.deleteProduct(this.product.id);
      } }
    ]
    this.wItems = [
      {label: 'Add', icon:'pi pi-plus' , command: () =>{
        this.addProduct();
      } },
      {label: 'Delete', icon:'pi pi-minus-circle' , command: () =>{
        this.deleteProduct(this.product.id);
      } }
    ]
    }

  addProduct(): void {
    this.ProductAPIService.saveProduct(this.product).subscribe();
  }
  deleteProduct(id: number): void {
    this.ProductAPIService.deleteProduct(id).subscribe();
  }


}

