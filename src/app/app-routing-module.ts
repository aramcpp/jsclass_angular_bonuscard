import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {ProductComponent} from './product/product.component';
import {BonusCardComponent} from './bonus-card/bonus-card.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductViewComponent} from './product-view/product-view.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'product', component: ProductComponent},
  {path: 'bonus-card', component: BonusCardComponent},
  {path: 'products/:id', component: ProductViewComponent},
  {path: 'products', component: ProductsListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
