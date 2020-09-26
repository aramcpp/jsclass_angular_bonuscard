import {ProductModel} from '../models/product.model';
import {Injectable} from '@angular/core';

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

  getProducts(): ProductModel[] {
    return this.products;
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

  getProduct(productId: number): ProductModel {
    for (let product of this.products) {
      if (product.id === productId) {
        return ;
      }
    }

    return null;
  }

  searchProduct(name: string): ProductModel {
    for (let product of this.products) {
      if (product.name === name) {
        return product;
      }
    }

    return null;
  }

  searchProductByPartialName(partialName: string): ProductModel[] {
    return this.products.filter((product) => {
      return product.name.indexOf(partialName) !== -1;
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
