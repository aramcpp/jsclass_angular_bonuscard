import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {UserComponent} from './user/user.component';
import {BonusCardComponent} from './bonus-card/bonus-card.component';

import {SearchingComponent} from './searching/searching.component';
import {Product1Component} from './product1/product1.component';
import {AppRoutingModule} from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    BonusCardComponent,
    SearchingComponent,
    Product1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
