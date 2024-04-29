import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { AdminProductListComponent } from './admin-product-list.component';
import { AdminProductCreateComponent } from './admin-product-create.component';
import { AdminProductDetailsComponent } from './admin-product-details.component';
import { AdminProductUpdateComponent } from './admin-product-update.component';
import { AdminProductRemoveComponent } from './admin-product-remove.component';
import { adminGuard } from './admin-guard.guard';

const routes: Routes = [
  //URL: /admin
  {
    //URL: /admin
    path:'admin',
    canActivate:[adminGuard],
    children: [
      //URL: /admin/products
      {path: 'products', component: AdminProductListComponent},
      //URL: /admin/create
      {path: 'products/create', component: AdminProductCreateComponent},
      {path: 'products/:id', component: AdminProductDetailsComponent},
      {path: 'products/edit/:id', component: AdminProductUpdateComponent},
      {path: 'products/remove/:id', component: AdminProductRemoveComponent},
      //URL: /admin
      {path: '', component: AdminHomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
