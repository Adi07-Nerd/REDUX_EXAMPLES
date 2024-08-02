import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { RouterState } from "./router.serializer";
import { LoaderState } from "./router.reducer";

export const getRouterState = (state:AppState) => state.router;

export const getLoaderState = (state:AppState) => state.loader;

export const getQueryParams = createSelector(getRouterState,router => (<RouterState><unknown>router.state).params["bookmarkId"]);

// If it was falsy (e.g., 0, null, undefined, etc.), it would be false, otherwise, true.
export const isPageLoading = createSelector(getLoaderState,loaderState => !!loaderState.loading)