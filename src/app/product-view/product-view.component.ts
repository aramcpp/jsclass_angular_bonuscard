import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ProductsDao} from '../dao/products.dao';
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  private products: ProductModel[];
  constructor(private route: ActivatedRoute, private productsDao: ProductsDao) {
    this.products = productsDao.getProducts();
  }

  ngOnInit(): void {
    console.log(this.productsDao.getProducts());
  }

}
