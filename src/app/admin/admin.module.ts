import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home.component';
import { AdminProductListComponent } from './admin-product-list.component';
import { AdminProductDetailsComponent } from './admin-product-details.component';
import { AdminProductCreateComponent } from './admin-product-create.component';
import { AdminProductUpdateComponent } from './admin-product-update.component';
import { AdminProductRemoveComponent } from './admin-product-remove.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminProductListComponent,
    AdminProductDetailsComponent,
    AdminProductCreateComponent,
    AdminProductUpdateComponent,
    AdminProductRemoveComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
