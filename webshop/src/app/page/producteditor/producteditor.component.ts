import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-producteditor',
  templateUrl: './producteditor.component.html',
  styleUrls: ['./producteditor.component.scss'],
})
export class ProducteditorComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );

  product: Product = new Product();
  constructor() {}

  ngOnInit(): void {
    this.product$.subscribe((product) => {
      this.product = product;
    });
  }
}
