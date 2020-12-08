import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
//GUARD
import { LandingPageGuard} from './landing-page/landing-page.guard'
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch :'full'},
  {path: 'home' ,component: LandingPageComponent},
  {path: 'login', component: LoginComponent, canActivate:[LandingPageGuard],},
  {path: 'register', component: RegisterComponent,canActivate:[LandingPageGuard],},
  {path: 'products', component: ProductsComponent},
  {path: 'user', component : UserComponent},
  {path: 'carrito', component : CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
