import { createFeatureSelector } from "@ngrx/store";
import { adapter, bookmarkEntitiesFeatureKey } from "./bookmark-entity.reducer";
import { BookmarkEntity } from "./bookmark-entity.model";

const bookmarkSelector = createFeatureSelector<BookmarkEntity>(bookmarkEntitiesFeatureKey);

export const { selectIds , selectAll , selectEntities , selectTotal } = adapter.getSelectors(bookmarkSelector)