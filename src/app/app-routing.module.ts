import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home.component';
import { ProductsHomeComponent } from './products/products-home.component';
import { NotFoundComponent } from './ui/not-found.component';
import { SiteErrorComponent } from './ui/site-error.component';

const routes: Routes = [
  // http://localhost:4200/home
  { path:'home', component: HomeComponent },
  // http://localhost:4200/products
  { path: 'products', component: ProductsHomeComponent },
  // http://localhost:4200/error
  { path: 'error/:errorCode', component: SiteErrorComponent },
  // http://localhost:4200
  { path: '', redirectTo:'/home', pathMatch:'full'},
  // http://localhost:4200/something
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
