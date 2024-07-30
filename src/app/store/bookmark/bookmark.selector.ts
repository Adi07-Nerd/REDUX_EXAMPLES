import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookmarkState } from ".";
import { bookmarkFeatureKey } from "./bookmark.reducer";

//Key will be added at the run time that's why we have to create feature selector in case of root & key will be same as provided in index.ts file of feature state
/**
 * const getBookmarkState = (state:AppState) => state.bookmark 
 */
const getBookmarkState = createFeatureSelector<BookmarkState>(bookmarkFeatureKey);

//Both way will work
export const getAllBookmarks = createSelector(getBookmarkState,(state:BookmarkState) => state.all)

export const getEditBookmark = createSelector(getBookmarkState,state => {return state.edit})