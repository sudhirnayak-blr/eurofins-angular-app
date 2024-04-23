import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'products-detail',
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent {

  @Input()
  selectedProduct:any;  //Model 

  //true if user clicks on edit button, else it will be false
  //Control the editability of the text boxes, If edit is click, then the 
  // textboxes should be editable, else it will be readonly.
  @Input() 
  isEditAction: boolean = false; 
  @Input() 
  isDeleteAction: boolean = false; 


  @Output("saveEvent")
  saveEvent: EventEmitter<Product>  = new EventEmitter<Product>();
  @Output("resetEvent") 
  resetEvent : EventEmitter<string> = new EventEmitter<string>();

  @Output("deleteEvent")
  deleteEvent: EventEmitter<Product> = new EventEmitter<Product>();
  
  deleteAction(e: any) {
    this.deleteEvent.emit(this.selectedProduct);
  }

  onSubmit(e: FormDataEvent) {
    e.preventDefault(); 
    console.log("form submitted.");
    //this.selectedProduct = <Product>{};
    this.saveEvent.emit(this.selectedProduct);
  }
  onReset(e:Event) {
    
    this.resetEvent.emit("Reset");
    //Trigger the parent reset method, such that the selected product in the 
    //parent will be reset to an empty object. 
  }


}
