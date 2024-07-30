import { createReducer, on } from '@ngrx/store';
import { Bookmark } from '../../shared/service/bookmark/bookmark.service';
import { BookmarkActions } from './bookmark.actions';

export const bookmarkFeatureKey = 'bookmarks';


export const initialEditBookmarkState:Bookmark | undefined = undefined

export const initialCreateBookmarkState:Bookmark | undefined = undefined
/**
 * {
  id: 0,
  name: '',
  url: '',
  created: new Date()
}
 */

export const initialAllBookmarkState:Bookmark[] | undefined = [ ]

/**
 * _ refers to current state
 * filterText given by the action (The key which you provide in prop will be used in {filterText})
 */
export const allBookmarkReducer = createReducer<Bookmark[] | undefined>(
  initialAllBookmarkState,
  on(BookmarkActions.bookmarkLoadAllBookmarks,(_,{bookmarks}) => bookmarks),
);

export const editBookmarkReducer = createReducer<Bookmark | undefined>(
  initialEditBookmarkState,
  on(BookmarkActions.bookmarkEditBookmarks,(_,{ bookmark }) => bookmark)
);

export const saveBookmarkReducer = createReducer<Bookmark | undefined>(
  initialCreateBookmarkState,
  on(BookmarkActions.bookmarkSaveBookmark,(_,{ bookmark }) => bookmark)
);

