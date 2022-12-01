import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService<Order> {
  override entityName: string = 'order';

  constructor() {
    super();
  }
}
