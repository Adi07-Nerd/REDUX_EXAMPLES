import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, bookmarkEntitiesFeatureKey, BookmarkEntityState } from "./bookmark-entity.reducer";
import { Bookmark } from "src/app/shared/service/bookmark/bookmark.service";
import { getQueryParams } from "../router/router.selector";

const bookmarkEntitySelector = createFeatureSelector<BookmarkEntityState>(bookmarkEntitiesFeatureKey);

export const { selectIds , selectAll , selectEntities , selectTotal } = adapter.getSelectors(bookmarkEntitySelector);


export const getFilterEntityState = createSelector(getQueryParams,bookmarkEntitySelector,(id,bookmarkEntity) => <Bookmark>bookmarkEntity.entities[id]);


export const haveBookmarkEntitiesLoaded = createSelector(bookmarkEntitySelector,(state:BookmarkEntityState) => !!state.loaded)