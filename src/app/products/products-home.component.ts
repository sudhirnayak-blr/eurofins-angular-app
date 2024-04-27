import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../models/product';
import { IProductActions } from '../models/customInterfaces';
import { ProductsApiService } from './products-api.service';

@Component({
  selector: 'products-home',
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {

  productList: Product[]=[];
  selectedProduct: Product = <Product>{}
  isEditAction: boolean = false; 
  isDeleteAction: boolean = false; 
  isAddNewAction:boolean = false;

  //View - isEditAction=false, isDeleteAction=false 
  //Edit - isEditAction=true, isDeleteAction=false 
  //Delete - isEditAction=false, isDeleteAction=true 

  constructor(
    public service: ProductsService,
    public apiService: ProductsApiService
  ) { 
    //this.productList = this.service.getAllProduct();
    this.apiService.getProducts().subscribe((data) =>{
        console.log(data);
        this.productList = data;
      }
    );
  }

  select(e: IProductActions) { 
    //console.log('Step 2: Parent function invoked/reached.')
    //var item = this.service.getProductDetails(e.productId);
    //let item={};
    this.apiService.getDetails(e.productId).subscribe(
      (data)=>this.selectedProduct= data
    )
    //console.log('Step 3: Item is selected', item);
    // if(item!=null) 
    //   this.selectedProduct=item;
    if(e.actionType==1) {   //For View Action
      this.isEditAction=false;
      this.isDeleteAction=false;
    } else if(e.actionType==2) { //For Edit action
      this.isEditAction=true;
      this.isDeleteAction=false;
    } else if(e.actionType==3) { //For Delete Action
      this.isEditAction=false;
      this.isDeleteAction=true;
    }
    //console.log('Step 4: Assigned to Selected Product')
    //console.log(this.selectedProduct.toString());
    console.log("Edit", this.isEditAction, "Delete", this.isDeleteAction);
    console.log(e)
    
  }

  saveDetails(model: Product) {
    //update the data into the list using the service 
    //and then we have to repopulate the list. 
    if(this.isAddNewAction)
      {
        //this.service.createNew(model);
        this.apiService.createNew(model).subscribe(
          data=>{
            this.initialize();
          })
      }
    else {
      //this.service.update(model);
      this.apiService.update(model).subscribe(
        data=>{
          this.initialize();
        })
    }
    //this.initialize();
  }
  resetSelection(e:string) { 
    this.initialize();
  }
  deleteItem(e:Product) { 
    //this.service.delete(e.productId);
    this.apiService.delete(e.productId).subscribe(
      (data) =>{
        this.initialize();
      })
    //this.initialize();
  }
  initialize() {
    //this.productList = this.service.getAllProduct();
    this.apiService.getProducts().subscribe((data) =>{
      console.log(data);
      this.productList = data;
    });
    this.selectedProduct=<Product>{};
    this.isEditAction=false;
    this.isDeleteAction=false;
    this.isAddNewAction=false;
  }
  addNewClick() {
    this.selectedProduct = <Product>{};
    this.isAddNewAction=true;
    this.isEditAction=true;
  }
}
