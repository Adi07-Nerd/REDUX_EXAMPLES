import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState,EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BookmarkEntityActions }  from './bookmark-entity.actions';
import { Bookmark } from 'src/app/shared/service/bookmark/bookmark.service';

export const bookmarkEntitiesFeatureKey = 'bookmarkEntities';


export interface State extends EntityState<Bookmark> {
  loaded:boolean;
  // additional entities state properties
}

export const adapter: EntityAdapter<Bookmark> = createEntityAdapter<Bookmark>();

export const initialState: State = adapter.getInitialState({
  loaded:false
  // additional entity state properties
});

//Multiple way to use directly access property reader then the whole action
export const reducer = createReducer(
  initialState,
  on(BookmarkEntityActions.addBookmarkentity,
    (state, {BookmarkEntity}) => adapter.addOne(BookmarkEntity, state)
  ),
  on(BookmarkEntityActions.upsertBookmarkentity,
    (state, action) => adapter.upsertOne(action.BookmarkEntity, state)
  ),
  on(BookmarkEntityActions.addBookmarkentitys,
    (state, action) => adapter.addMany(action.BookmarkEntitys, state)
  ),
  on(BookmarkEntityActions.upsertBookmarkentitys,
    (state, action) => adapter.upsertMany(action.BookmarkEntitys, state)
  ),
  on(BookmarkEntityActions.updateBookmarkentity,
    (state, action) => adapter.updateOne(action.BookmarkEntity, state)
  ),
  on(BookmarkEntityActions.updateBookmarkentitys,
    (state, action) => adapter.updateMany(action.BookmarkEntitys, state)
  ),
  on(BookmarkEntityActions.deleteBookmarkentity,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BookmarkEntityActions.deleteBookmarkentitys,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BookmarkEntityActions.loadBookmarkentitys,
    (state, action) => adapter.setAll(action.BookmarkEntitys, {...state, loaded:true})
  ),
  on(BookmarkEntityActions.clearBookmarkentitys,
    state => adapter.removeAll(state)
  ),
);


export const bookmarkEntitiesFeature = createFeature({
  name: bookmarkEntitiesFeatureKey,
  reducer
});

export const {
  selectIds,
  selectEntities,
} = bookmarkEntitiesFeature;
