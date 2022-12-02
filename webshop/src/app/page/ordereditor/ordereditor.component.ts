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

  order: Order = new Order();
  constructor() {}

  ngOnInit(): void {
    this.order$.subscribe((order) => {
      this.order = order;
    });
  }
}
