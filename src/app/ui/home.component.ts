import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'First Angular App';
  counter = 10; 
  product: Product = new Product(11, "Sample", 100, 100, false);

  updatePrice() { 
    this.product.unitPrice+=100;
  }
  updateStock() {
    this.product.unitsInStock += 50;
  }

  click(e:any) { 
    this.title = "New Title" + this.counter; 
    this.counter+=10;
  }
}
