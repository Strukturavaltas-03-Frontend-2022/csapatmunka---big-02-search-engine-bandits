import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../model/category';

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

  customerTableColumns: ITableColumn[] = [
    { title: '#', key: 'id' },
    { title: 'Name / E-mail', key: 'lastName' },
    { title: 'Address', key: 'address' },
    { title: 'Status', key: 'active' },
  ];

  productTableColumns: ITableColumn[] = [
    { title: '#', key: 'id' },
    { title: 'Name / Type', key: 'name' },
    { title: 'Category', key: 'catID' },
    { title: 'Description', key: 'description' },
    { title: 'Price', key: 'price' },
    { title: 'Featured', key: 'featured' },
    { title: 'Available', key: 'active' },
  ];

  categoryID: Category[] = [
    {
      id: 1,
      name: 'Petrol',
      description:
        'Since petrol comes from petroleum, petrol is a fossil fuel. Definitions of petrol.',
    },
    {
      id: 2,
      name: 'Diesel',
      description:
        'Diesel fuel is a mixture of hydrocarbons—with boiling points in the range of 150 to 380°C—which are obtained from petroleum.',
    },
    {
      id: 3,
      name: 'Electric',
      description:
        'Electric vehicles have a battery instead of a gasoline tank, and an electric motor instead of an internal combustion engine.',
    },
  ];

  constructor() {}
}
