import {
  Action,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { Bookmark } from '../../shared/service/bookmark/bookmark.service';

import * as fromBookmark from './bookmark.reducer'

export const bookmarksFeatureKey = 'bookmarks';

export interface BookmarkState {
  all: Bookmark[],
  edit:Bookmark
}

export const reducers: ActionReducerMap<BookmarkState> = {
  all: fromBookmark.allBookmarkReducer,
  edit: fromBookmark.editBookmarkReducer
};


export const metaReducers: MetaReducer<BookmarkState>[] =  [];
