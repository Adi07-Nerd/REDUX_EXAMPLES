import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "..";
import { FilterState } from "./toolbar.reducer";

export const selectFilter = (state:AppState) => { 
    return state.filter
};

/**
 * Selector is used to extract the chunk or specific part of state or property from the nestate state or property.
 */
export const getFilterText = createSelector(selectFilter,(filterState:FilterState) => { 
    return filterState.filterText
});