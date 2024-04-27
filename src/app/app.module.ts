import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header.component';
import { SiteHeaderComponent } from './ui/site-header.component';
import { SiteFooterComponent } from './ui/site-footer.component';
import { NotFoundComponent } from './ui/not-found.component';
import { SiteErrorComponent } from './ui/site-error.component';
import { HomeComponent } from './ui/home.component';
import { ProductsHomeComponent } from './products/products-home.component';
import { ProductsDetailComponent } from './products/products-detail.component';
import { ProductsListComponent } from './products/products-list.component';
import { HttpClientModule } from '@angular/common/http';


//Decorator - NGModule 
@NgModule({
  /*declarations- this section lists all the components and directives used/defined in the 
  application. It is a comma separated list of values. */
  declarations: [
    AppComponent,
    PageHeaderComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    NotFoundComponent,
    SiteErrorComponent,
    HomeComponent,
    ProductsHomeComponent,
    ProductsDetailComponent,
    ProductsListComponent
  ],
  /*imports - lists all the external modules that are required in this module. */
  imports: [
    BrowserModule, //should be the first module to be imported always, 
    //any other module imports should happen after the BrowserModule import. 
    HttpClientModule,
    FormsModule,  //adds the import {FormsModule} from "@angular/forms"
    AppRoutingModule
  ],
  /* exports - lists all the app modules that will be made available to 
  other external applications - optional */ 
  /* providers - lists all the services and pipes defined within the application
   and these services listed here will be injected by Angular where ever required.
   */
  providers: [],
  /* bootstrap - only the top-most Module in Angular can define this section. 
   No other Module within the application can define it. 
   - Lists the components that should be rendered/loaded when the application starts
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
