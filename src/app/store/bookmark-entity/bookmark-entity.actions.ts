import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Bookmark } from '../../shared/service/bookmark/bookmark.service';


export const BookmarkEntityActions = createActionGroup({
  source: 'BookmarkEntity/API',
  events: {
    'Load BookmarkEntitys': props<{ BookmarkEntitys: Bookmark[] }>(),
    'Add BookmarkEntity': props<{ BookmarkEntity: Bookmark }>(),
    'Upsert BookmarkEntity': props<{ BookmarkEntity: Bookmark }>(),
    'Add BookmarkEntitys': props<{ BookmarkEntitys: Bookmark[] }>(),
    'Upsert BookmarkEntitys': props<{ BookmarkEntitys: Bookmark[] }>(),
    'Update BookmarkEntity': props<{ BookmarkEntity: Update<Bookmark> }>(),
    'Update BookmarkEntitys': props<{ BookmarkEntitys: Update<Bookmark>[] }>(),
    'Delete BookmarkEntity': props<{ id: string }>(),
    'Delete BookmarkEntitys': props<{ ids: string[] }>(),
    'Clear BookmarkEntitys': emptyProps(),
  }
});
