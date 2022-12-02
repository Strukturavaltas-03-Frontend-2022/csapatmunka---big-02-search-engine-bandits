import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { ProductComponent } from './page/product/product.component';
import { CustomerComponent } from './page/customer/customer.component';
import { OrderComponent } from './page/order/order.component';
import { BillComponent } from './page/bill/bill.component';
import { ProducteditorComponent } from './page/producteditor/producteditor.component';
import { CustomereditorComponent } from './page/customereditor/customereditor.component';
import { OrdereditorComponent } from './page/ordereditor/ordereditor.component';
import { BilleditorComponent } from './page/billeditor/billeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    CustomerComponent,
    OrderComponent,
    BillComponent,
    ProducteditorComponent,
    CustomereditorComponent,
    OrdereditorComponent,
    BilleditorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
