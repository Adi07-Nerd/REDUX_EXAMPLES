import { Injectable } from '@angular/core';

export interface Bookmark {
  id:number,
  name:string,
  url:string,
  created:Date
}

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private httpService:) { }

  public getAll(){

  }
}
