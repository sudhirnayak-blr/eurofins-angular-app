import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header.component';

//Decorator - NGModule 
@NgModule({
  /*declarations- this section lists all the components and directives used/defined in the 
  application. It is a comma separated list of values. */
  declarations: [
    AppComponent,
    PageHeaderComponent
  ],
  /*imports - lists all the external modules that are required in this module. */
  imports: [
    BrowserModule,
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
