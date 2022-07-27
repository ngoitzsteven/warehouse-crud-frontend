import { Component, OnInit } from '@angular/core';
import { WarehouseAPIService } from '../warehouse-api.service';
import { Warehouse } from 'Warehouse';
import { ProductAPIServiceService } from '../product-apiservice.service';
import { MenuItem } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { Product } from 'Product';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css'],
})
export class WarehouseListComponent implements OnInit {
  pItems!: MenuItem[];
  wItems!: MenuItem[];
  product: Product = new Product();

  WarehouseAPIService: WarehouseAPIService;
  warehouses: Warehouse[] = [];
  warehouseFormData: Warehouse = new Warehouse();
  constructor(WarehouseAPIService: WarehouseAPIService) {
    this.WarehouseAPIService = WarehouseAPIService;
  }

  ngOnInit(): void {
    //pub/sub
    this.WarehouseAPIService.findWarehouseList().subscribe((resp) => {
      this.warehouses = resp;
    });
     this.wItems = [
      {
        label: 'Add',
        icon: 'pi pi-plus',
        command: () => {
          this.addWarehouse();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-minus-circle',
        command: () => {
          this.deleteWarehouse(this.product.id);
        },
      },
    ];
  }

  addWarehouse(): void {
    this.WarehouseAPIService.saveWarehouse(this.warehouseFormData).subscribe();
  }
  deleteWarehouse(id: number): void {
    this.WarehouseAPIService.deleteWarehouse(id).subscribe();
  }
}
