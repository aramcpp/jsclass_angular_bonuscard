import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { BonusCardComponent } from './bonus-card/bonus-card.component';

import { BonusComponent } from './bonus/bonus.component';
import { SearchingComponent } from './searching/searching.component';
import { Product1Component } from './product1/product1.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ProductComponent,
    UserComponent,
    BonusCardComponent,
    BonusComponent,
    SearchingComponent,
    Product1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
