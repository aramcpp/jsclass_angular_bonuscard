import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsDao} from '../dao/products.dao';
import {ProductModel} from '../models/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  public product$: Observable<ProductModel>;

  constructor(private route: ActivatedRoute, private productsDao: ProductsDao) { }

  ngOnInit(): void {
    this.product$ = this.productsDao.getProduct(+this.route.snapshot.paramMap.get('id'));
  }

}
