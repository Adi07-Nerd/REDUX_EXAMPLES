import { isDevMode } from '@angular/core';

import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromToolbar from 'src/app/store/toolbar/toolbar.reducer';

export interface AppState {
  filter:fromToolbar.FilterState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  filter: fromToolbar.toolbarReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
