import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { NvarComponent } from './nvar/nvar.component';
import { ProductsComponent } from './products/products.component';
//formulario
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
//firebase
import { AngularFireStorageModule, BUCKET} from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { firebaseConfig } from '../environments/firebase';
//components
import { UserComponent } from './user/user.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//http
import { HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './CRUD/new-product/new-product.component';
import { ListProductsComponent } from './CRUD/list-products/list-products.component';
import { ProductComponent } from './CRUD/product/product.component';
//import { AlumnosComponent } from './alumnos/alumnos.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    FooterComponent,
    NvarComponent,
    ProductsComponent,
    UserComponent,
    CarritoComponent,
    CardComponent,
    NewProductComponent,
    ListProductsComponent,
    ProductComponent,
  // AlumnosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {provide: BUCKET, useValue:'gs://soluciones-integrales-a46a9.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
