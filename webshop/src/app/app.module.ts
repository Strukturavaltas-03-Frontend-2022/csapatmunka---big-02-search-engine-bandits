import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { FilterPipe } from './pipe/filter.pipe';
import { SumPipe } from './pipe/sum.pipe';
import { CounterPipe } from './pipe/counter.pipe';
import { IdconverterPipe } from './pipe/idconverter.pipe';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SortPipe } from './pipe/sort.pipe';

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
    FilterPipe,
    SumPipe,
    CounterPipe,
    IdconverterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
