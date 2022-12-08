import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  toastr: ToastrService = inject(ToastrService);
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

  //loading button
  loading = true;

  constructor() {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      if (!params['id']) {
        return;
      }
      this.order$.subscribe((order) => {
        this.order = order;
      });
    });

    this.productService
      .getAll()
      .subscribe((products) => (this.products = products));
    this.customerService
      .getAll()
      .subscribe((customers) => (this.customers = customers));
  }

  onSubmit(order: Order): void {
    order.id = Number(order.id);

    if (this.order.id) {
      this.orderService.update(this.order).subscribe((order) => {
        this.toastr.success('Order updated successfully', 'Order updated!', {
          timeOut: 3000,
        });
        this.router.navigate(['/order']);
      });
    } else if (!this.order.id) {
      this.orderService.create(this.order).subscribe((order) => {
        this.toastr.success('Order created successfully', 'Order created!', {
          timeOut: 3000,
        });
        this.router.navigate(['/order']);
      });
    }
  }

  onLoading(): void {
    this.loading = false;
  }
}
