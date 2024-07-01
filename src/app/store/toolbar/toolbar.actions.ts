import { createActionGroup, props } from '@ngrx/store';

/**
 * action will return data in value key.
 * Advantage of using same as state key u dont have to assign in the state object just rather write {filterText} in reducer
 */
export const FILTER_BOOKMARKS = createActionGroup({
  source: 'Toolbar',
  events: {
    'Filter Bookmarks': props<{filterText: string}>(),
  }
});


