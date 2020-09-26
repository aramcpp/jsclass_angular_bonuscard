import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {UserComponent} from './user/user.component';
import {BonusCardComponent} from './bonus-card/bonus-card.component';

import {SearchingComponent} from './searching/searching.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {AppRoutingModule} from './app-routing-module';
import {ProductsDao} from './dao/products.dao';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    BonusCardComponent,
    SearchingComponent,
    ProductsListComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsDao],
  bootstrap: [AppComponent]
})
export class AppModule { }
