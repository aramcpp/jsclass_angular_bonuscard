import {ProductModel} from '../models/product.model';

export class ProductsDao {
  private products: ProductModel[] = [
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
    //TODO: implement
  }

  getProduct(productId: number): ProductModel {
    //TODO: implement
  }

  searchProduct(name: string): ProductModel {
    //TODO: implement
  }

  searchProductByPartialName(partialName: string): ProductModel[] {
    //TODO: implement
  }


}
