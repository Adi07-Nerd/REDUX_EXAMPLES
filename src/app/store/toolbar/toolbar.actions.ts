import { createActionGroup, props } from '@ngrx/store';

export const FILTER_BOOKMARKS = createActionGroup({
  source: 'Toolbar',
  events: {
    'Filter Bookmarks': props<{filterText:string}>(),
  }
});


