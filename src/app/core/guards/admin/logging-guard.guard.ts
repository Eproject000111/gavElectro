import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingGuardGuard implements CanActivate {
  constructor(private _authService:AuthService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // let currentUser = JSON.parse(localStorage.getItem('user_avail') || '{}');
      // let isTokenAvail = JSON.parse(document.cookie);
      let isTokenAvail = document.cookie.split('=')[1];
    
      if(isTokenAvail){
        this.router.navigateByUrl('/admin/dash')
        return false;
      }
      else{
        return true;
      }      
  }
  
}
