import { createReducer, Action,on } from '@ngrx/store';

export interface FilterState {
  filterText:string;
}

export const initialState: FilterState = {
  filterText: ''
};

export const toolbarReducer = createReducer(
  initialState,
  // tap into NgRx actions to mutate the state
);

export function reducer(state: FilterState | undefined, action: Action) {
  return toolbarReducer(state, action);
}
