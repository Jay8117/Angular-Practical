import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError,catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      catchError((error)=>{
        return throwError(() =>new Error('Faild to load user') )
      })
    )
  }
}
