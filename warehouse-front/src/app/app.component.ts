import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warehouse-front';
  
}
