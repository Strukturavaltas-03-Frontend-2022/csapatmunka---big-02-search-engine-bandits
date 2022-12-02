import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderService: OrderService = inject(OrderService);
  configService: ConfigService = inject(ConfigService);

  orderList$: Observable<Order[]> = this.orderService.getAll();

  //paginator
  page: number = 1;
  orderList: Order[] = [];

  //searcher
  phrase$: BehaviorSubject<string> = this.configService.searchPhrase$;

  //thead
  columns: ITableColumn[] = this.configService.orderTableColumns;

  constructor() {}

  ngOnInit(): void {
    this.orderService
      .getAll()
      .subscribe((dataList) => (this.orderList = dataList));
  }

  removeBill(order: Order): void {
    if (confirm('Are you sure?')) {
      this.orderService
        .remove(order)
        .subscribe(() =>
          this.orderService.getAll().subscribe(() => location.reload())
        );
    }
  }
}
