import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService<Product> {
  override entityName: string = 'product';

  constructor() {
    super();
  }
}
