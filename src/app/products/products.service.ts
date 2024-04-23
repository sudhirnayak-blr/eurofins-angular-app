import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { find } from 'rxjs';

const productList = [
  new Product(1, "Markers", 100, 123, true),
  new Product(2, "Writing Pads", 75, 43, false),
  new Product(3, "Whiteboards", 544, 773, true),
  new Product(4, "Gel Pens", 232, 23, false),
  new Product(5, "Single Lens Projector", 3443, 64, true),
];


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllProduct()  { 
    return productList;
  }
  getProductDetails(id:number) { 
    var filteredList = productList.filter(c=>c.productId==id); 
    if(filteredList.length)
      return filteredList[0];
    return null; 
  }
  //home-component.ts save() , call this method
  //this.service.update(model)
  createNew(model: Product) { 
    var max=1;
    productList.forEach(c=>{
      if(c.productId>max)
        max=c.productId;
    })
    model.productId = max+1;
    var findIndex = productList.findIndex(c=>c.productId==model.productId); 
    if(findIndex<0) { 
      productList.push(model);
    }
  }
  update(model: Product) { 
    var findIndex = productList.findIndex(c=>c.productId==model.productId); 
    if(findIndex>-1) { 
      productList.splice(findIndex, 1, {...model});
    }
  }
  //home-component.ts deleteItem() , call this method
  delete(id: number) { 
    var findIndex = productList.findIndex(c=>c.productId==id); 
    if(findIndex>-1) { 
      productList.splice(findIndex, 1);
    }
  }


}
