import { Component, OnInit } from '@angular/core';
import { Product } from 'Product';
import { ProductAPIServiceService } from '../product-apiservice.service';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  ProductAPIService: ProductAPIServiceService;
  products: Product[] = [];
  pItems!: MenuItem[];
  /* A spread operator. It is used to copy the values of all of the enumerable own properties from one
 or more source objects to a target object. It will return the target object. */
  clonedProducts: { [s: string]: Product } = {};

  displayProductAdd: boolean = false;
  displayProductDelete: boolean = false;
  productFormData: Product = new Product();
  partNameOrId: any;

  constructor(ProductAPIService: ProductAPIServiceService,public messageService: MessageService) {
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

  deleteProduct(id: number) : void {
    this.ProductAPIService.deleteProduct(id).subscribe();
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
  /* A spread operator. It is used to copy the values of all of the
    enumerable own properties from one or more source objects to a
    target object. It will return the target object. */
  onRowEditInit(product: Product) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: Product) {
    this.ProductAPIService.updateProduct(this.clonedProducts[product.id]);
    
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product is updated',
    });
  }
  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id];
  }
}
