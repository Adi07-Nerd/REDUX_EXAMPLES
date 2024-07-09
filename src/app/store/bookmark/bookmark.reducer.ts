import { createReducer, on } from '@ngrx/store';
import { Bookmark } from '../../shared/service/bookmark/bookmark.service';
import { BookmarkActions } from './bookmark.actions';

export const bookmarkFeatureKey = 'bookmark';

export const initialAllBookmarkState:Bookmark[] = []

export const initialEditBookmarkState:Bookmark = {
  id: 0,
  name: '',
  url: '',
  created: new Date()
}

/**
 * _ refers to current state
 * filterText given by the action (The key which you provide in prop will be used in {filterText})
 */
export const allBookmarkReducer = createReducer(
  initialAllBookmarkState,
  on(BookmarkActions.bookmarkLoadAllBookmarks,(_,{bookmarks}) => bookmarks),
);

export const editBookmarkReducer = createReducer(
  initialEditBookmarkState,
  on(BookmarkActions.bookmarkEditBookmarks,(_,{ bookmark }) => bookmark)
);

