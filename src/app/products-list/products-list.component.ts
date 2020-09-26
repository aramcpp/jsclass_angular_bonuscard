import {Component, OnInit} from '@angular/core';
import {ProductsDao} from '../dao/products.dao';
import {ProductModel} from '../models/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products$: Observable<ProductModel[]>;

  constructor(private productsDao: ProductsDao) {
    this.products$ = productsDao.getProducts()
  }

  ngOnInit(): void {
  }

}
