import { createReducer, on } from '@ngrx/store';
import { BookmarkActions } from './bookmark.actions';

export const bookmarkFeatureKey = 'bookmark';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

