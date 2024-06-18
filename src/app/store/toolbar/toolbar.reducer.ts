import { createReducer, Action,on } from '@ngrx/store';
import { FILTER_BOOKMARKS } from './toolbar.actions';

export interface FilterState {
  filterText:string;
}

export const initialState: FilterState = {
  filterText: ''
};

/**
 * _ refers to current state
 * filterText given by the action
 */
export const toolbarReducer = createReducer(
  initialState,
  on(FILTER_BOOKMARKS.filterBookmarks,(_,{filterText}) => ({filterText}))
  // tap into NgRx actions to mutate the state
);

export function reducer(state: FilterState | undefined, action: Action) {
  return toolbarReducer(state, action);
}
