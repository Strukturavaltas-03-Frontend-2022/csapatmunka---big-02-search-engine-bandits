import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerService: CustomerService = inject(CustomerService);

  customerList$: Observable<Customer[]> = this.customerService.getAll();

  //paginator
  page: number = 1;
  customerList: Customer[] = [];

  constructor() {}

  ngOnInit(): void {
    this.customerService
      .getAll()
      .subscribe((dataList) => (this.customerList = dataList));
  }

  removeBill(customer: Customer): void {
    if (confirm('Are you sure?')) {
      this.customerService
        .remove(customer)
        .subscribe(() =>
          this.customerService.getAll().subscribe(() => location.reload())
        );
    }
  }
}
