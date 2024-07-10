import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookmarkState } from ".";

//Key will be added at the run time that's why we have to create feature selector in case of root & key will be same as provided in index.ts file of feature state
/**
 * const getBookmarkState = (state:AppState) => state.bookmark 
 */
const getBookmarkState = createFeatureSelector<BookmarkState>('bookmarks');

//Both way will work
export const getAllBookmarks = createSelector(getBookmarkState,(state:BookmarkState) => state.all)

export const getEditBookmark = createSelector(getBookmarkState,state => state.edit)