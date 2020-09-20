import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { BonusCardComponent } from './bonus-card/bonus-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ProductComponent,
    UserComponent,
    BonusCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
