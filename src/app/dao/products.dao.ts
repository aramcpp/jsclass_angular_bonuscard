import {ProductModel} from '../models/product.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ProductsDao {
  private products: ProductModel[] = [
    {
      id: 1,
      name: 'Banana',
      price: 3.5,
      bonusRate: 0.02,
      isOnSale: true,
      salePercentage: 0,
      saleBonusRate: 0
    },
    {
      id: 2,
      name: 'Apple',
      price: 3.8,
      bonusRate: 0.02,
      isOnSale: true,
      salePercentage: 0,
      saleBonusRate: 0,
    }
  ];

  getProducts(): Observable<ProductModel[]> {
    return new Observable((observer) => {
      observer.next(this.products);
      observer.complete();
    });
  }

  /**
   * adds product to products list
   * @param product - product to add
   */
  addProduct(product: ProductModel): void {
    this.products.push(product);
  }

  removeProduct(productId: number): void {
    // for (let i in this.products) {
    //   if (this.products[i].id === productId) {
    //     this.products.splice(i, 1);
    //     break;
    //   }
    // }
  }

  getProduct(productId: number): Observable<ProductModel> {
    for (let product of this.products) {
      if (product.id === productId) {
        return new Observable((observer) => {
          observer.next(product);
          observer.complete();
        });
      }
    }

    return new Observable((observer) => {
      observer.next(null);
      observer.complete();
    });
  }

  searchProduct(name: string): Observable<ProductModel> {
    for (let product of this.products) {
      if (product.name === name) {
        return new Observable((observer) => {
          observer.next(product);
          observer.complete();
        });
      }
    }

    return new Observable((observer) => {
      observer.next(null);
      observer.complete();
    });
  }

  searchProductByPartialName(partialName: string): Observable<ProductModel[]> {
    return new Observable((observer) => {
      observer.next(this.products.filter((product) => {
        return product.name.indexOf(partialName) !== -1;
      }));
      observer.complete();
    });
  }

  /***
   * Banan
   * Baobab
   * Batat
   *
   * na
   */

}
