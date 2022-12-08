import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customereditor',
  templateUrl: './customereditor.component.html',
  styleUrls: ['./customereditor.component.scss'],
})
export class CustomereditorComponent implements OnInit {
  customerService: CustomerService = inject(CustomerService);
  toastr: ToastrService = inject(ToastrService);
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  customer$: Observable<Customer> = this.ar.params.pipe(
    switchMap((params) => this.customerService.get(params['id']))
  );

  customer: Customer = new Customer();

  statusList: any[] = [
    { key: 'true', title: 'YES, the customer is active' },
    { key: '', title: 'NO, the customer is inactive' },
  ];

  //loading button
  loading = true;

  constructor() {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      if (!params['id']) {
        return;
      }
      this.customer$.subscribe((customer) => {
        this.customer = customer;
      });
    });
  }

  onSubmit(customer: Customer): void {
    customer.id = Number(customer.id);
    customer.active = Boolean(customer.active);

    if (this.customer.id) {
      this.customerService.update(this.customer).subscribe((customer) => {
        this.toastr.success(
          'Customer updated successfully',
          'Customer updated!',
          { timeOut: 3000 }
        );
        this.router.navigate(['/customer']);
      });
    } else if (!this.customer.id) {
      this.customerService.create(this.customer).subscribe((customer) => {
        this.toastr.success(
          'Customer created successfully',
          'Customer created!',
          { timeOut: 3000 }
        );
        this.router.navigate(['/customer']);
      });
    }
  }

  onLoading(): void {
    this.loading = false;
  }
}
