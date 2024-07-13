import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, first, map, of, switchMap } from 'rxjs';
import { BookmarkService,Bookmark } from '../shared/service/bookmark/bookmark.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { Store } from '@ngrx/store';
import { BookmarkActions } from '../store/bookmark/bookmark.actions';
import { AppState } from '../store/index';

@Injectable({
  providedIn: 'root'
})
export class ListGuard implements CanActivate {
  
  constructor(private bookService:BookmarkService,private dialog:MatDialog,private store$:Store<AppState>) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.bookService.getAll().pipe(first(),
      map((bookmarks:Bookmark[]) => this.store$.dispatch(BookmarkActions.bookmarkLoadAllBookmarks({bookmarks}))),
      switchMap(() => this.activateRoute()),
      catchError(() => { 
        this.dialog.open(ErrorDialogComponent,
          {width:'400px',
          data:{ errorMessage: 'Sorry, Unable to fetch bookmark.'}
        })
        return of(false)
      })
      );
    // return true;
  }
  
  activateRoute(){
    return of(true)
  }
}
