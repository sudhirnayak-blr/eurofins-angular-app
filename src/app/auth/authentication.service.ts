import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { AuthenticationResponseModel } from './authentication-response-model';


//const loginUrl = "http://localhost:5046/api/accounts/authenticate";
const loginUrl = "http://localhost:5046/api/Accounts"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated : boolean = false; 
  tokenObject : AuthenticationResponseModel = <AuthenticationResponseModel>{};
  returnUrl : string = "";
  
  logout() { 
    this.isAuthenticated=false; 
    this.tokenObject=<AuthenticationResponseModel>{};
  }

  authenticate(model: LoginViewModel) 
    : Observable<AuthenticationResponseModel> 
  { 
    let jsonBody = JSON.stringify(model); 
    let options = { 
      headers: { 
        "Content-Type" : 'application/json'
      }
    }
    return this.http.post<AuthenticationResponseModel>(
        loginUrl,
        jsonBody,
        options
    );
  }

}
