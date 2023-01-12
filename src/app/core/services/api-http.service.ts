import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError} from 'rxjs';
import {retry,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

    public get(url: string, options?: any) { 
    return this.http.get(url, options).pipe(catchError(this.handleError)); 
    } 
    public post(url: string, data: any, options?: any) { 
    return this.http.post(url, data, options).pipe(catchError(this.handleError)); 
    } 
    public put(url: string, data: any, options?: any) { 
    return this.http.put(url, data, options).pipe(catchError(this.handleError)); 
    } 
    public delete(url: string, options?: any) { 
    return this.http.delete(url, options).pipe(catchError(this.handleError)); 
    } 

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
