import { Component, OnInit } from '@angular/core';
import { WarehouseAPIService } from '../warehouse-api.service';
import { Warehouse } from 'Warehouse';

import {InputNumberModule} from 'primeng/inputnumber';



@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

  WarehouseAPIService : WarehouseAPIService;
  warehouses: Warehouse[] = [];
  warehouseFormData: Warehouse = new Warehouse();
  constructor(WarehouseAPIService: WarehouseAPIService) { 
    this.WarehouseAPIService = WarehouseAPIService;
  }

  ngOnInit(): void {
        //pub/sub
        this.WarehouseAPIService
        .findWarehouseList()
        .subscribe( resp =>{
          this.warehouses = resp; 
    
        });

}
}
