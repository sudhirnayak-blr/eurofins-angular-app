import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminProductService } from './admin-product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrl: './admin-product-update.component.css'
})
export class AdminProductUpdateComponent implements OnInit {

  productForm: any;
  constructor( 
    private fb:FormBuilder, 
    private currentRoute : ActivatedRoute, 
    private router: Router, 
    private service: AdminProductService
  ) { 
    this.productForm = this.fb.group({
      productId : [''],
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      discontinued: ['']
    });
  }
  model: Product = <Product>{};
  ngOnInit(): void {
      let id = this.currentRoute.snapshot.paramMap.get("id"); 
      this.service.getProductDetails(id).subscribe(
        (response)=>{
          this.model = <Product>response; 
          this.productForm.patchValue({
            productId: this.model.productId,
            productName: this.model.productName,
            unitPrice: this.model.unitPrice,
            unitsInStock: this.model.unitsInStock,
            discontinued: this.model.discontinued
          })
        }
      )
  }
  get f() { return this.productForm.controls;}
  submit(e:Event) { 
    //create the object based on the values. 
    let item = new Product(
      this.model.productId,
      this.f.productName.value,
      this.f.unitPrice.value,
      this.f.unitsInStock.value, 
      this.f.discontinued.value
    ); 
    console.log(item);
    //invoke the service and if the item is updated, then redirect the 
    //user to the list page. 
    this.service.update(item).subscribe(
      (response)=>this.router.navigate(['/admin/products'])
    );
  }
  
}
