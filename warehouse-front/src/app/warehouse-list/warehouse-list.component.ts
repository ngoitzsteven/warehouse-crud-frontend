import { Component, OnInit } from '@angular/core';
import { WarehouseAPIService } from '../warehouse-api.service';
import { Warehouse } from 'Warehouse';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css', ],
})
export class WarehouseListComponent implements OnInit {
  wItems!: MenuItem[];

  displayWarehouseAdd: boolean = false;
  displayWarehouseDelete: boolean = false;
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
        label: 'Add Warehouse',
        icon: 'pi pi-plus',
        command: () => {
          this.showBasicDialogWarehouseAdd();
        },
      },
      {
        label: 'Delete Warehouse',
        icon: 'pi pi-minus-circle',
        command: () => {
          this.showBasicDialogWarehouseDelete();
        },
      },
    ];
  }

  addWarehouse(): void {
    this.displayWarehouseAdd = false;
    this.WarehouseAPIService.saveWarehouse(this.warehouseFormData).subscribe();
  }
  deleteWarehouse(id: number): void {
    this.WarehouseAPIService.deleteWarehouse(id).subscribe();
    this.displayWarehouseDelete = false;
  }
  /* A function that is called when the user clicks on the "Add Warehouse" button. */
  showBasicDialogWarehouseAdd() {
    this.displayWarehouseAdd = true;
  }
  showBasicDialogWarehouseDelete() {
    this.displayWarehouseDelete = true;
  }
}
