import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './page/bill/bill.component';
import { BilleditorComponent } from './page/billeditor/billeditor.component';
import { CustomerComponent } from './page/customer/customer.component';
import { CustomereditorComponent } from './page/customereditor/customereditor.component';
import { HomeComponent } from './page/home/home.component';
import { OrderComponent } from './page/order/order.component';
import { OrdereditorComponent } from './page/ordereditor/ordereditor.component';
import { ProductComponent } from './page/product/product.component';
import { ProducteditorComponent } from './page/producteditor/producteditor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'edit/customer',
    component: CustomereditorComponent,
  },
  {
    path: 'edit/customer/:id',
    component: CustomereditorComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'edit/product',
    component: ProducteditorComponent,
  },
  {
    path: 'edit/product/:id',
    component: ProducteditorComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'edit/order',
    component: OrdereditorComponent,
  },
  {
    path: 'edit/order/:id',
    component: OrdereditorComponent,
  },
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'edit/bill',
    component: BilleditorComponent,
  },
  {
    path: 'edit/bill/:id',
    component: BilleditorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
