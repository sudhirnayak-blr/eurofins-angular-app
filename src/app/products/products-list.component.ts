import { Component, 
  EventEmitter, 
  Input, 
  Output,
  OnInit,
  OnChanges, 
  SimpleChange,
  DoCheck,
  SimpleChanges
} from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from './products.service';
import { IProductActions } from '../models/customInterfaces';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent 
    implements OnInit, OnChanges, DoCheck 
{

  ngOnChanges(changes: SimpleChanges): void {
      console.log('product list component - ngOnChange', changes);
  }
  ngOnInit(): void {
      console.log('ProductListComponent, ngOnInit')
  }
  ngDoCheck(): void {
      console.log('ProductListComponent, ngDoCheck')
  }

  @Input()
  productList: Product[] = []; 

  @Output("selectItemEvent") 
  //selectItemEvent : EventEmitter<number> = new EventEmitter<number>();
  selectItemEvent : EventEmitter<IProductActions> = new EventEmitter<IProductActions>();

  @Output("addNewItemEvent")
  addNewItemEvent: EventEmitter<void> = new EventEmitter<void>();
  addNewItemClick() {
    this.addNewItemEvent.emit();
  }
  viewItemClick(productId:any) {
    //console.log('Step 1: ', productId)
    var id = parseInt(productId); 
    //this.selectItemEvent.emit(id);
    this.selectItemEvent.emit({productId: id, actionType: 1});
  }
  editItemClick(productId: any) { 
    var id = parseInt(productId); 
    this.selectItemEvent.emit({productId: id, actionType: 2});
  }
  deleteItemClick(productId: any) {
    var id = parseInt(productId); 
    this.selectItemEvent.emit({productId: id, actionType: 3});
  }

  addNew(e:any) {

  }

  /*
  1. When addnew is clicked, a new empty product object should be created and assigned to 
    the selectedProduct. 
  2. This action is happening in the child component, it should get 
    redirected to the parent component where the empty object will be created. Also define 
    some flags to denote that it is coming from AddNew action. 
  3.When the user clicks on save in the details component, the parent component should 
    check the flags and call either the update or the create method of the service. 
  4.The service does not have a create method, so write one method for adding the item to the 
    list.
  */

  // constructor(
  //   public service : ProductsService
  // )  {
  //   this.productList = this.service.getAllProduct();

  // }
}
