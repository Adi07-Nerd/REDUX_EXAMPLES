import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { RouterState } from "./router.serializer";

export const getRouterState = (state:AppState) => state.router;

export const getQueryParams = createSelector(getRouterState,router => (<RouterState><unknown>router.state).params["bookmarkId"])