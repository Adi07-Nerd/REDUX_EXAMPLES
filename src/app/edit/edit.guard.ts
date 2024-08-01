import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, first, map, of, switchMap } from 'rxjs';
import { Bookmark, BookmarkService } from '../shared/service/bookmark/bookmark.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { Store } from '@ngrx/store';
import { BookmarkState } from '../store/bookmark';
import { BookmarkActions } from '../store/bookmark/bookmark.actions'
import { AppState } from '../store/index';
import * as routerSelector from '../store/router/router.selector'

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  constructor(private bookmarkService:BookmarkService,private dailog:MatDialog,private store$:Store<AppState>){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store$.select(routerSelector.getQueryParams).pipe(
        first(),
        switchMap((bookmarkId) => this.bookmarkService.getById(bookmarkId).pipe(
          first(),
          map((bookmark:Bookmark) => this.store$.dispatch(BookmarkActions.bookmarkEditBookmarks({bookmark}))),
          switchMap(() => this.activateRoute()),
          catchError((err:any) => {
            console.log(err);
            this.dailog.open(ErrorDialogComponent,{
              width: '400px',
              data: { errorMessage: 'Sorry, unable to edit bookmark.', redirectTo: '/list' }
            })
  
            return of(false)
          })
        ))
      )
  }

  activateRoute() {
    return of(true);
  }
  
}
