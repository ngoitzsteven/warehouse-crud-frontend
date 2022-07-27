import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { HeaderComponent } from './header/header.component';
import { TableModule } from 'primeng/table'
import {SplitButtonModule} from 'primeng/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WarehouseListComponent,
    ProductSearchComponent,
    HeaderComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    InputNumberModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }