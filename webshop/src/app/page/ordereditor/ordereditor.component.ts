import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-ordereditor',
  templateUrl: './ordereditor.component.html',
  styleUrls: ['./ordereditor.component.scss'],
})
export class OrdereditorComponent implements OnInit {
  orderService: OrderService = inject(OrderService);
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  order$: Observable<Order> = this.ar.params.pipe(
    switchMap((params) => this.orderService.get(params['id']))
  );

  statusList: any[] = [
    { key: 'paid', title: 'The order is paid' },
    { key: 'new', title: 'The order is not paid yet' },
    { key: 'shipped', title: 'The order is shipped' },
  ];

  order: Order = new Order();
  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.order$.subscribe((order) => {
      this.order = order;
    });
  }

  onChecked(): void {
    this.checked = !this.checked;
  }

  onSubmit(order:Order): void {
    order.id = Number(order.id);

    if (this.order.id) {
      this.orderService
        .update(this.order)
        .subscribe((order) => this.router.navigate(['/order']));
    } else if (!this.order.id) {
      this.orderService
        .create(this.order)
        .subscribe((order) => this.router.navigate(['/order']));
    }
  }
}
