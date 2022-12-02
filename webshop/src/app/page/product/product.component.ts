import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productService: ProductService = inject(ProductService);

  productList$: Observable<Product[]> = this.productService.getAll();

  constructor() {}

  ngOnInit(): void {}

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
