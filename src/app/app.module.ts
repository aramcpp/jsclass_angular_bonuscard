import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { BonusCardComponent } from './bonus-card/bonus-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    BonusCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
