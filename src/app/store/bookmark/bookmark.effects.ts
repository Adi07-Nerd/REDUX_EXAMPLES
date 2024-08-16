import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookmarkActions } from './bookmark.actions'
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Bookmark, BookmarkService } from 'src/app/shared/service/bookmark/bookmark.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { RouterActions } from '../router/router.actions';
import { BookmarkEntityActions } from '../../store/bookmark-entity/bookmark-entity.actions'
import { BookmarkEntityState } from '../bookmark-entity/bookmark-entity.reducer';
import { Store } from '@ngrx/store';


@Injectable()
export class BookmarkEffects {

  /**
   * 
   * @param actions$ 
   * @param bookmarkService 
   * exhaustMap : tTake note that exhaustMap will ignore source values while the previous inner observable is still active.
   * This means that if the inner observable hasn't completed, any new values emitted from the source will be discarded without any mapping.
   */
  constructor(private actions$: Actions,private bookmarkService:BookmarkService,private store$:Store,private router:Router,private matDialog:MatDialog) {}

  public saveBookmark$ = createEffect(() => this.actions$.pipe(
    ofType(BookmarkActions.bookmarkSaveBookmark),
    exhaustMap((action) => this.bookmarkService.save(
      {...action.bookmark}).pipe( 
        tap(() => this.store$.dispatch(BookmarkEntityActions.addBookmarkentity({BookmarkEntity: {...action.bookmark,id: (new Date()).getTime()}}))),
        map(() => RouterActions.routerRedirectToListRoute()),
        catchError((err) => of(BookmarkActions.bookmarkSave_errorBookmark({message:'Sorry Unable to create a bookmark.',error:err})))
      ),
    )
  ),{useEffectsErrorHandler:false});

  /**
   * tap is use so that we can use the original stream for the later purpose
   * dispatch false is use to dont allow it registered in futher action of the store. (if u dont add this it will call action till infinite loop)
   */
  public saveBookmarkSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(BookmarkActions.bookmarkSave_successBookmark),
    tap(() => this.router.navigate(['/list']))
  ),{ dispatch: false });

  public saveBookmarkError$ = createEffect(() => this.actions$.pipe(
    ofType(BookmarkActions.bookmarkSave_errorBookmark),
    tap((err) => {
      this.matDialog.open(ErrorDialogComponent,{ width : '400px', data: { errorMessage: err.message}})
      console.log(err);
    })
  ),{ dispatch : false})

  public editBookmark$ = createEffect(() => this.actions$.pipe(
    ofType(BookmarkActions.bookmarkSaveEditBookmark),
    exhaustMap((action) => this.bookmarkService.update({...action.bookmark}).pipe(
      tap(() => this.store$.dispatch(BookmarkEntityActions.updateBookmarkentity({BookmarkEntity: {id: action.bookmark.id,changes:action.bookmark}}))),
      map(() => RouterActions.routerRedirectToListRoute()),
      catchError((err) => of(BookmarkActions.bookmarkSave_errorBookmark({message:'Sorry Unable to Edit a Bookmark.',error:err})))
    ))
  ),{ useEffectsErrorHandler: false})
}
