import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  allBookmarks?:Bookmark[];
  editBookmark?:Bookmark;
  filterText?:string;

  constructor(private http:HttpClient) { }

  public getAll(): Observable<Bookmark[]>{
    return this.http.get<Bookmark[]>('api/bookmarks');
  }

  public getById(bookmarkId:string):Observable<Bookmark>{
    return this.http.get<Bookmark>(`api/bookmarks/${bookmarkId}`)
  }

  public save(bookmark:Bookmark):Observable<any>{
    // this.allBookmarks?.push(bookmark);
    return this.http.post('api/bookmarks',bookmark);
  }

  public update(bookmark:Bookmark):Observable<any>{
    return this.http.put('api/bookmarks',bookmark);
  }
}
