import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  customer$: Observable<Customer> = this.ar.params.pipe(
    switchMap((params) => this.customerService.get(params['id']))
  );

  customer: Customer = new Customer();
  checked: boolean = false;

  statusList: any[] = [
    { key: 'true', title: 'YES, the customer is active' },
    { key: '', title: 'NO, the customer is inactive' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      if(!params['id']){
        return;
      }
      this.customer$.subscribe((customer) => {
        this.customer = customer;
      });
    });
  }

  onChecked(): void {
    this.checked = !this.checked;
  }

  onSubmit(customer: Customer): void {
    customer.id = Number(customer.id);
    customer.active = Boolean(customer.active);

    if (this.customer.id) {
      this.customerService
        .update(this.customer)
        .subscribe((customer) => this.router.navigate(['/home']));
    } else if (!this.customer.id) {
      this.customerService
        .create(this.customer)
        .subscribe((customer) => this.router.navigate(['/home']));
    }
  }
}
