import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-error',
  templateUrl: './site-error.component.html',
  styleUrl: './site-error.component.css'
})
export class SiteErrorComponent {

  errorCode:number = 0; 
  errorMessage: string='';

  constructor(
    private currentRoute: ActivatedRoute
  ) {
    this.errorCode = currentRoute.snapshot.params["errorCode"];
    console.log(this.errorCode);
    this.errorMessage = this.getErrorMessage();
  }

  getErrorMessage() { 
    let errors = [
      "Test Error Message", 
      "Not found error", 
      "Object reference not set ot instance of object", 
      "Failed to invoke service",
      "Failed to connect to server", 
      "Could not load the specified type", 
      "Conversion failed"
    ];
    return errors[this.errorCode > 0 ? this.errorCode-1: 0];
  }
}
