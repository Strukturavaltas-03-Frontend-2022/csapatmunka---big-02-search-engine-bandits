import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );

  product: Product = new Product();
  checked: boolean = false;
  categories:Category[] = this.configService.categoryID;

  constructor() {}

  ngOnInit(): void {
    this.product$.subscribe((product) => {
      this.product = product;
    });
  }

  onChecked(): void {
    this.checked = !this.checked;
  }

  onSubmit(product:Product): void {
    product.id = Number(product.id);

    if (this.product.id) {
      this.productService
        .update(this.product)
        .subscribe((product) => this.router.navigate(['/products']));
    } else if (!this.product.id) {
      this.productService
        .create(this.product)
        .subscribe((product) => this.router.navigate(['/products']));
    }
  }
}
