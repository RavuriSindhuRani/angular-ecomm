import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'users',component:DashboardComponent,
    children:[
      {path:'user',component:UsersComponent},
      {path:'products',component:ProductsComponent},
      {path:'orders',component:OrdersComponent},
      {path:'wishlist',component:WishlistComponent}

    ]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
