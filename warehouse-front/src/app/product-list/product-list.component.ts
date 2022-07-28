import { Component, OnInit } from '@angular/core';
import { Product } from 'Product';
import { ProductAPIServiceService } from '../product-apiservice.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  ProductAPIService: ProductAPIServiceService;
  products: Product[] = [];
  pItems!: MenuItem[];

  displayProductAdd: boolean = false;
  displayProductDelete: boolean = false;
  productFormData: Product = new Product();
  partNameOrId:any;



  constructor(ProductAPIService: ProductAPIServiceService) {
    this.ProductAPIService = ProductAPIService;
  }
  ngOnInit(): void {
    //pub/sub
    this.ProductAPIService.findProductList().subscribe((resp) => {
      this.products = resp;
    });

    this.pItems = [
      {
        label: 'Add Product',
        icon: 'pi pi-plus',
        command: () => {
          this.showBasicDialogWarehouseAdd();
        },
      },
      {
        label: 'Delete Product',
        icon: 'pi pi-minus-circle',
        command: () => {
          this.showBasicDialogWarehouseDelete();
        },
      },
    ];
  }
  addProduct(): void {
    this.displayProductAdd = false;
    this.ProductAPIService.addProduct(this.productFormData).subscribe();
  }


  deleteProductID(id: number) {
    this.ProductAPIService.deleteProductID(id).subscribe;
    this.displayProductDelete = false;
    console.log(id);
  }
  // deleteProductName(name: any): void {
  //   this.ProductAPIService.deleteProductName(this.productFormData.productName);
  // }

  showBasicDialogWarehouseAdd() {
    this.displayProductAdd = true;
  }
  showBasicDialogWarehouseDelete() {
    this.displayProductDelete = true;


  }

}
