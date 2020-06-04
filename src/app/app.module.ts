import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule, routingComponents } from './router/router.module' // - exported
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'

//  ---- firebase stuff ------
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ShopComponent } from './components/layout/shop/shop.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';


//  ----------
// import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/layout/login/login.component'
// import { SignupComponent } from './components/layout/signup/signup.component'


// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'signup',
//     component: SignupComponent
//   }
// ]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    UserProfileComponent,
    ShopComponent,
    ShopItemComponent                 // - exported to build more convinient using
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,                 // - exported to build more convinient using
    // RouterModule.forRoot(routes)   // Router that we defined inside app.module
    ReactiveFormsModule,

    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,

    AngularFireModule.initializeApp(environment.firebase),  // Firebase stuff
    AngularFireAuthModule,                                  // Firebase stuff
    AngularFireStorageModule,                               // Firebase stuff
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
