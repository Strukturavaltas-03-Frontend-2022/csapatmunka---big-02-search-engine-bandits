import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderService: OrderService = inject(OrderService);
  customerService: CustomerService = inject(CustomerService);
  productService: ProductService = inject(ProductService);
  configService: ConfigService = inject(ConfigService);
  toastr: ToastrService = inject(ToastrService);

  orderList$: Observable<Order[]> = this.orderService.getAll();

  //idconverter
  customerList$: Observable<Customer[]> = this.customerService.getAll();
  customerList: Customer[] = [];
  productList$: Observable<Product[]> = this.productService.getAll();
  productList: Product[] = [];

  //paginator
  page: number = 1;
  orderList: Order[] = [];

  //searcher
  searchPhrase: string = '';
  searchBy: string = 'name';

  //thead
  columns: ITableColumn[] = this.configService.orderTableColumns;

  sortKey: string = 'id';
  sortDirection: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.orderService
      .getAll()
      .subscribe((dataList) => (this.orderList = dataList));

    this.customerService
      .getAll()
      .subscribe((dataList) => (this.customerList = dataList));

    this.productService
      .getAll()
      .subscribe((dataList) => (this.productList = dataList));
  }

  removeBill(order: Order): void {
    if (confirm('Are you sure?')) {
      this.orderService.remove(order).subscribe(() =>
        this.orderService.getAll().subscribe((orders) => {
          this.toastr.error('Order deleted successfully!', 'Order deleted!', {
            timeOut: 3000,
          });
          this.orderList = orders;
        })
      );
    }
  }

  setSort(key: string): void {
    if (key === this.sortKey) {
      this.sortDirection *= -1;
    }
    this.sortKey = key;
  }

  onSearch(event: any): void {
    this.searchPhrase = event.target.value;
  }

  //Drag and Drop
  drop(event: CdkDragDrop<{ title: string; key: string }[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
