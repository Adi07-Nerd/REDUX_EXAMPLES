import { isDevMode } from '@angular/core';
import * as fromRouterStore from '@ngrx/router-store';

import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromToolbar from 'src/app/store/toolbar/toolbar.reducer';

export interface AppState {
  filter: fromToolbar.FilterState,
  router: fromRouterStore.RouterReducerState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  filter: fromToolbar.toolbarReducer,
  router: fromRouterStore.routerReducer
};


export const metaReducers: MetaReducer<AppState>[] = [];
