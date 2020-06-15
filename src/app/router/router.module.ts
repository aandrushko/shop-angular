import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/layout/login/login.component';
import { SignupComponent } from '../components/layout/signup/signup.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { ShopComponent } from '../components/layout/shop/shop.component';
import { CartComponent } from '../components/cart/cart.component';


const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, SignupComponent]
