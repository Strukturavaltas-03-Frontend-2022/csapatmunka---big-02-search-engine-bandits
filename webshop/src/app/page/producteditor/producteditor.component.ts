import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, switchMap } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-producteditor',
  templateUrl: './producteditor.component.html',
  styleUrls: ['./producteditor.component.scss'],
})
export class ProducteditorComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  configService: ConfigService = inject(ConfigService);
  toastr: ToastrService = inject(ToastrService);
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );

  product: Product = new Product();
  categories: Category[] = this.configService.categoryID;

  //loading button
  loading = true;

  constructor() {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      if (!params['id']) {
        return;
      }

      this.product$.subscribe((product) => {
        this.product = product;
      });
    });
  }

  onSubmit(product: Product): void {
    product.id = Number(product.id);

    if (this.product.id) {
      this.productService.update(this.product).subscribe((product) => {
        this.toastr.success(
          'Product updated successfully',
          'Product updated!',
          { timeOut: 3000 }
        );
        this.router.navigate(['/products']);
      });
    } else if (!this.product.id) {
      this.productService.create(this.product).subscribe((product) => {
        this.toastr.success(
          'Product created successfully',
          'Product created!',
          { timeOut: 3000 }
        );
        this.router.navigate(['/products']);
      });
    }
  }

  onLoading(): void {
    this.loading = false;
  }
}
