import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterActions } from './router.actions';
import { map, tap } from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class RouterEffects {


  constructor(private actions$: Actions,private router:Router) {}

  public redirectToList = createEffect(() => this.actions$.pipe(
    ofType(RouterActions.routerRedirectToListRoute),
    tap(() => this.router.navigate(['/list']))
  ),{ dispatch : false})
}
