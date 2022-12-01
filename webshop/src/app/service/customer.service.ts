import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService<Customer> {
  override entityName: string = 'customer';

  constructor() {
    super();
  }
}
