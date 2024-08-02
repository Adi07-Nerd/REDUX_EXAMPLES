import { Action, createReducer, on } from '@ngrx/store';
import { routerCancelAction, routerErrorAction, routerNavigatedAction, routerNavigationAction } from '@ngrx/router-store';

export interface LoaderState {
  loading:boolean
}

export const initialState: LoaderState = {
  loading: false
};

export const pageNavigationStartReducer = createReducer(
  initialState,
  on(routerNavigationAction,(_) => ({loading: true})),
  on(routerNavigatedAction,(_) => ({loading: false})),
  on(routerCancelAction,(_) => ({loading: false})),
  on(routerErrorAction,(_) => ({loading: false}))
);

export function reducer(state:LoaderState | undefined,action : Action){
  return pageNavigationStartReducer(state,action)
}

