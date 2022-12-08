import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, switchMap } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { Order } from 'src/app/model/order';
import { BillService } from 'src/app/service/bill.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-billeditor',
  templateUrl: './billeditor.component.html',
  styleUrls: ['./billeditor.component.scss'],
})
export class BilleditorComponent implements OnInit {
  billService: BillService = inject(BillService);
  orderService: OrderService = inject(OrderService);
  toastr: ToastrService = inject(ToastrService);
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  bill$: Observable<Bill> = this.ar.params.pipe(
    switchMap((params) => this.billService.get(params['id']))
  );

  bill: Bill = new Bill();
  orders: Order[] = [];

  //loading button
  loading = true;

  constructor() {}

  statusList: any[] = [
    { key: 'paid', title: 'This bill is paid' },
    { key: 'new', title: 'This bill is not paid yet' },
  ];

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      if (!params['id']) {
        return;
      }
      this.bill$.subscribe((bill) => {
        this.bill = bill;
      });
    });

    this.orderService.getAll().subscribe((orders) => (this.orders = orders));
  }

  onSubmit(bill: Bill): void {
    bill.id = Number(bill.id);

    if (this.bill.id) {
      this.billService.update(bill).subscribe((bill) => {
        this.toastr.success('Bill updated successfully', 'Bill updated!', {
          timeOut: 3000,
        });
        this.router.navigate(['/bill']);
      });
    } else if (!this.bill.id) {
      this.billService.create(bill).subscribe((bill) => {
        this.toastr.success('Bill created successfully', 'Bill created!', {
          timeOut: 3000,
        });
        this.router.navigate(['/bill']);
      });
    }
  }

  onLoading(): void {
    this.loading = false;
  }
}
