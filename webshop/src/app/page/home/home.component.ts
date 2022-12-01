import { Component, OnInit } from '@angular/core';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { Product } from 'src/app/model/product';
import { BillService } from 'src/app/service/bill.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  billService: BillService = inject(BillService);

  productList$: Observable<Product[]> = this.productService.getAll();
  billList$: Observable<Bill[]> = this.billService.getAll();
  constructor() {}

  ngOnInit(): void {}
}
