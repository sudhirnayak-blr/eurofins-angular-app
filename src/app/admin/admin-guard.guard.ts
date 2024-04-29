import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';
import { Injectable, inject } from '@angular/core';

export const adminGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot, 
  state:RouterStateSnapshot, 
  ) => {
    let service = inject(AuthenticationService);
    service.returnUrl = state.url;
    //add the returnUrl:string property in the authentication service 
    let status = service.isAuthenticated; 
    if(!status)
      inject(Router).navigate(["/login"]);
    return status;  
    //==if true, enables the child routes, 
    // else if it returns false,  blocks access to the current route and all its
    // child routes. 
};
