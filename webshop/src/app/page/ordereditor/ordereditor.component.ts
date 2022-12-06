import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-ordereditor',
  templateUrl: './ordereditor.component.html',
  styleUrls: ['./ordereditor.component.scss'],
})
export class OrdereditorComponent implements OnInit {
  orderService: OrderService = inject(OrderService);
  productService: ProductService = inject(ProductService);
  customerService: CustomerService = inject(CustomerService);
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

  customers: Customer[] = [];
  products: Product[] = [];
  
  order: Order = new Order();
  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.order$.subscribe((order) => {
      this.order = order;
    });

    this.productService.getAll().subscribe(products => this.products = products);
    this.customerService.getAll().subscribe(customers => this.customers = customers);
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
