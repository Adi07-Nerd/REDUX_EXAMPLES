import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }

  public getAll<Type>(url:string):Observable<Type>{
    return this.http.get<Type>(url)
  }
}
