import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUserValue = this.dataService.currentUserValue;

    if(currentUserValue && currentUserValue.role) {
      let hasPermission: boolean = false;
      
      if(route.data.roles) {
        for(let role of currentUserValue.role) {
          if(route.data.roles.indexOf(role) !== -1){
            hasPermission = true; 
            break;  
          }
        }
      }
      
      if(!hasPermission) {
        this.router.navigate(['/error']);
        return false;
      }

      return true;
    }

    this.router.navigate(['/login'], { queryParams: {returnUrl: state.url} });
    return false;
  }

}
