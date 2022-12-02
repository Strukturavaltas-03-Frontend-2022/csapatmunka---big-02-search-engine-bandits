import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ITableColumn {
  title: string;
  key: string;
}

// Category (id, name, description)
// Product (id, name, type, catID, description, price, featured, active)
// Address (zip, country, city, street, notes)
// Customer (id, firstName, lastName, email, address: Address, active)
// Bill (id, orderID, amount, status: new|paid)

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('');

  orderTableColumns: ITableColumn[] = [
    { title: '#', key: 'id' },
    { title: 'Customer', key: 'customerID' },
    { title: 'Product', key: 'productID' },
    { title: 'Amount', key: 'amount' },
    { title: 'Status', key: 'status' },
  ];

  billTableColumns: ITableColumn[] = [
    { title: '#', key: 'id' },
    { title: 'Order id', key: 'orderID' },
    { title: 'Amount', key: 'amount' },
    { title: 'Status', key: 'status' },
  ];

  constructor() {}
}
