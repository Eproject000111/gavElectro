import { Injectable } from '@angular/core';
import {ApiHttpService} from './api-http.service'
import {environment} from 'src/environments/environment'
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface userInfoType
  {
    "_id": String,
    "name": String,
    "email": String,
    "phone_no": Number,
    "role": String,
    "Address":Array<[]>,
    "token": String
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfoValue = '';
  _userInfo = new BehaviorSubject<any>(this.userInfoValue);
  // readonly userInfo$ = this._userInfo.asObservable();

  constructor(private apiService:ApiHttpService) { }
  
login(body:any){
  // return this.apiService.post(environment.url+'auth/login',body).pipe(tap((userVal:any)=>{
  //   // this._userInfo.next(userVal.data)
  //   document.cookie = 'Token'+'='+userVal.data.token;
  // }));
}

}
