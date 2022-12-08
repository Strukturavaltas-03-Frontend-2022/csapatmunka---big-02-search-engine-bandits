import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  toastr: ToastrService = inject(ToastrService);

  productList$: Observable<Product[]> = this.productService.getAll();

  //paginator
  page: number = 1;
  productList: Product[] = [];

  //searcher
  searchPhrase: string = '';
  searchBy: string = 'name';

  //thead
  columns: ITableColumn[] = this.configService.productTableColumns;

  //catId
  category: Category[] = this.configService.categoryID;

  sortKey: string = 'id';
  sortDirection: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.productService
      .getAll()
      .subscribe((dataList) => (this.productList = dataList));
  }

  removeBill(product: Product): void {
    if (confirm('Are you sure?')) {
      this.productService.remove(product).subscribe(() =>
        this.productService.getAll().subscribe((products) => {
          this.toastr.error(
            'Product deleted successfully!',
            'Product deleted!',
            { timeOut: 3000 }
          );
          this.productList = products;
        })
      );
    }
  }

  setSort(key: string): void {
    if (key === this.sortKey) {
      this.sortDirection *= -1;
    }
    this.sortKey = key;
  }

  onSearch(event: any): void {
    this.searchPhrase = event.target.value;
  }

  //Drag and Drop
  drop(event: CdkDragDrop<{ title: string; key: string }[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
