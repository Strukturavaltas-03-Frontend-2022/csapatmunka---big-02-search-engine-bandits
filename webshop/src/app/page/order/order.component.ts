import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderService: OrderService = inject(OrderService);

  orderList$: Observable<Order[]> = this.orderService.getAll();

  //paginator
  page: number = 1;
  orderList: Order[] = [];

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
