import { Component } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResponseModel } from './authentication-response-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model : LoginViewModel = <LoginViewModel>{}; 

 loginForm : FormGroup = new FormGroup({
  username: new FormControl(this.model.Username, 
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
  password: new FormControl(this.model.Password, 
    [Validators.required, Validators.minLength(4)]
  )
 });

 constructor(
  public authService: AuthenticationService 
 ) { }
 get f() { return this.loginForm.controls;}
 responseObj : AuthenticationResponseModel = <AuthenticationResponseModel>{};
 onSubmit(e:Event) { 
  e.preventDefault();
  console.log(this.loginForm.value);
  this.model = new LoginViewModel(); 
  this.model.Username = this.loginForm.controls['username'].value;
  this.model.Password = this.f['password'].value;
  this.authService.authenticate(this.model).subscribe(
    (response)=> {
      this.responseObj=response;
      console.log('Login successful', this.responseObj);
      this.notFoundError=false;
      this.authService.isAuthenticated=true;
      this.authService.tokenObject=this.responseObj;
    }, (error) => {
      if(error.status==404) { 
        this.notFoundError = true;
      }
    });
 }
 notFoundError: boolean = false;
 

}
