import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Bookmark } from '../../shared/service/bookmark/bookmark.service';

/**
 * action will return data in value key.
 * Advantage of using same as state key u dont have to assign in the state object just rather write {filterText} in reducer
 */
export const BookmarkActions = createActionGroup({
  source: 'Bookmark',
  events: {
    'Bookmark Load All Bookmarks': props<{bookmarks:Bookmark[]}>(),
    'Bookmark Edit Bookmarks': props<{bookmark:Bookmark}>(),
  },
});
