import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Bookmark } from '../../shared/service/bookmark/bookmark.service';

/**
 * action will return data in value key.
 * Advantage of using same as state key u dont have to assign in the state object just rather write {filterText} in reducer
 */
export const BookmarkActions = createActionGroup({
  source: 'Bookmark',
  events: {
    'Bookmark Load All Bookmarks': props<{bookmarks:Bookmark[] | undefined}>(),
    'Bookmark Edit Bookmarks': props<{bookmark:Bookmark | undefined}>(),
    'Bookmark Save Bookmark': props<{bookmark:Bookmark}>(),
    'Bookmark Save Edit Bookmark': props<{bookmark:Bookmark}>(),
    'Bookmark Save_Error Bookmark': props<{message:string,error?:Error}>(),
    'Bookmark Save_Success Bookmark': emptyProps()
  },
});
