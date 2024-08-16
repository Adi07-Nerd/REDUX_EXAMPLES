import { isDevMode } from '@angular/core';
import * as fromRouterStore from '@ngrx/router-store';
import * as fromLoaderState from '../store/router/router.reducer'
import * as fromBookmarkentity from '../store/bookmark-entity/bookmark-entity.reducer'

import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromToolbar from 'src/app/store/toolbar/toolbar.reducer';

export interface AppState {
  filter: fromToolbar.FilterState,
  router: fromRouterStore.RouterReducerState,
  loader: fromLoaderState.LoaderState,
  [fromBookmarkentity.bookmarkEntitiesFeatureKey]:fromBookmarkentity.BookmarkEntityState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  filter: fromToolbar.toolbarReducer,
  router: fromRouterStore.routerReducer,
  loader: fromLoaderState.pageNavigationStartReducer,
  [fromBookmarkentity.bookmarkEntitiesFeatureKey]:fromBookmarkentity.reducer
};


export const metaReducers: MetaReducer<AppState>[] = [];
