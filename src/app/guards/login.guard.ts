import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUserValue = this.dataService.currentUserValue;

    if(currentUserValue && currentUserValue.role) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: {returnUrl: state.url} });
    return false;
  }

}
