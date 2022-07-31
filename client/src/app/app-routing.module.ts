import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServerErrorComponent} from "./core/pages/errors/server-error/server-error.component";
import {NotFoundComponent} from "./core/pages/errors/not-found/not-found.component";
import {AuthenticationGuard} from "./core/guards/authentication.guard";
import {LoggedInGuard} from "./core/guards/logged-in.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(s => s.ShopModule), data: {breadcrumb: 'Shop'}},
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then(b => b.BasketModule),
    data: {breadcrumb: 'Basket'}
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(c => c.CheckoutModule),
    canActivate: [AuthenticationGuard],
    data: {breadcrumb: 'Checkout'}
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(a => a.AccountModule),
    canActivate:[LoggedInGuard],
    data: {breadcrumb: {skip: true}}
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(o => o.OrdersModule),
    canActivate:[AuthenticationGuard],
    data: {breadcrumb: {skip: true}}
  },
  {path: 'server-error', component: ServerErrorComponent, data: {breadcrumb: 'Server Error'}},
  {path: 'not-found', component: NotFoundComponent, data: {breadcrumb: 'Not Found'}},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
