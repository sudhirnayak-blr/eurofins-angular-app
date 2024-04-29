import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AuthenticationService } from '../auth/authentication.service';

const productUrl = "http://localhost:5156/api/products";

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(
    private http: HttpClient,
    private service: AuthenticationService
  ) { }

  getAllProducts() { 
    let options= { 
      headers: { 
        "Authorization" : `Bearer ${this.service.tokenObject.token}`
      }
    }
    return this.http.get(productUrl, options);
  }

  getProductDetails(id:any) { 
    let options= { 
      headers: { 
        "Authorization" : `Bearer ${this.service.tokenObject.token}`
      }
    }
    return this.http.get(`${productUrl}/${id}`, options);
  }

  create(model:Product) { 
    var body=JSON.stringify(model); 
    var options={
      headers: { 
        "Authorization" : `Bearer ${this.service.tokenObject.token}`,
        "Content-Type" : "application/json"
      }
    };
    return this.http.post(productUrl, body, options);
  }

  update(model: Product) { 
    var body=JSON.stringify(model); 
    var options={
      headers: { 
        "Authorization" : `Bearer ${this.service.tokenObject.token}`,
        "Content-Type" : "application/json"
      }
    };
    return this.http.put(`${productUrl}/${model.productId}`, body, options);
  }

  delete(id:any) { 
    let options= { 
      headers: { 
        "Authorization" : `Bearer ${this.service.tokenObject.token}`
      }
    }
    return this.http.delete(`${productUrl}/${id}`, options);
  }
}
