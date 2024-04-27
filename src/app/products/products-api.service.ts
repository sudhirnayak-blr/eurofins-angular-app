import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(
    private http: HttpClient
  ) { }

  url = "http://localhost:5141/api/products";

  getProducts() : Observable<Product[]> { 
    return this.http.get<Product[]>(this.url);
  }
  
  getDetails(id:number) : Observable<Product> { 
    return this.http.get<Product>(`${this.url}/${id}`)
  }

  createNew(model: Product) : Observable<Product> { 
    let options = { 
      headers: {
        "Content-Type" : "application/json"
      }
    }
    return this.http.post<Product>(
      this.url,
      JSON.stringify(model),
      options )
  }
  update(model: Product)  { 
    let options = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    return this.http.put(`${this.url}/${model.productId}`, JSON.stringify(model), options);
  }
  delete(id:number) { 
    return this.http.delete(`${this.url}/${id}`); 
  }
  
}
