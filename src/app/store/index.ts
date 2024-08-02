import { isDevMode } from '@angular/core';
import * as fromRouterStore from '@ngrx/router-store';
import * as fromLoaderState from '../store/router/router.reducer'

import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromToolbar from 'src/app/store/toolbar/toolbar.reducer';

export interface AppState {
  filter: fromToolbar.FilterState,
  router: fromRouterStore.RouterReducerState,
  loader: fromLoaderState.LoaderState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  filter: fromToolbar.toolbarReducer,
  router: fromRouterStore.routerReducer,
  loader: fromLoaderState.pageNavigationStartReducer
};


export const metaReducers: MetaReducer<AppState>[] = [];
