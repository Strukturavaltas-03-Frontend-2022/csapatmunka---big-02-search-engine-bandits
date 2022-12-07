import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerService: CustomerService = inject(CustomerService);
  configService: ConfigService = inject(ConfigService);
  toastr:ToastrService = inject(ToastrService);

  customerList$: Observable<Customer[]> = this.customerService.getAll();

  //paginator
  page: number = 1;
  customerList: Customer[] = [];

  //searcher
  phrase$: BehaviorSubject<string> = this.configService.searchPhrase$;

  //thead
  columns: ITableColumn[] = this.configService.customerTableColumns;

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
          this.customerService.getAll().subscribe(customers => {
            this.toastr.error('Customer deleted successfully!', 'Customer deleted!', { timeOut: 3000 });
            this.customerList = customers;
          })
        );
    }
  }
}
