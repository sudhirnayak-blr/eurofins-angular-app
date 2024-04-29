import { Component, OnInit } from '@angular/core';
import { AdminProductService } from './admin-product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrl: './admin-product-list.component.css'
})
export class AdminProductListComponent implements OnInit {

  productList: Product[] = <Product[]>{}; 

  constructor(
    private service: AdminProductService
  ) { 

  }

  ngOnInit(): void {
      this.service.getAllProducts().subscribe(
      (response) => {
        this.productList = <[]>response;
      });
  }
}
