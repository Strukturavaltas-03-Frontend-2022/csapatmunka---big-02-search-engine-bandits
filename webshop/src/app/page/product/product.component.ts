import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  configService: ConfigService = inject(ConfigService);

  productList$: Observable<Product[]> = this.productService.getAll();

  //paginator
  page: number = 1;
  productList: Product[] = [];

  //searcher
  phrase$: BehaviorSubject<string> = this.configService.searchPhrase$;

  //thead
  columns: ITableColumn[] = this.configService.productTableColumns;

  //catId
  category: Category[] = this.configService.catId;

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
