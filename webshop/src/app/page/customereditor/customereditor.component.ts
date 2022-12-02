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

  constructor() {}

  ngOnInit(): void {
    this.customer$.subscribe((customer) => {
      this.customer = customer;
    });
  }
}
