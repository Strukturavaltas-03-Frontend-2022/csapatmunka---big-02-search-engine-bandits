import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  customerService: CustomerService = inject(CustomerService);

  customerList$: Observable<Customer[]> = this.customerService.getAll();

  constructor() {}

  ngOnInit(): void {}

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
