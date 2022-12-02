import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productService: ProductService = inject(ProductService);

  productList$: Observable<Product[]> = this.productService.getAll();

  //paginator
  page: number = 1;
  productList: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.productService
      .getAll()
      .subscribe((dataList) => (this.productList = dataList));
  }

  removeBill(product: Product): void {
    if (confirm('Are you sure?')) {
      this.productService
        .remove(product)
        .subscribe(() =>
          this.productService.getAll().subscribe(() => location.reload())
        );
    }
  }
}
