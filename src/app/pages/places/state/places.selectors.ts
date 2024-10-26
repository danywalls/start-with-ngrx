import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, PlacesState } from './places.state';


const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();


const selectPlaceState = createFeatureSelector<PlacesState>('places');


export const selectAllPlaces = createSelector(selectPlaceState, selectAll);
export const selectPlaceEntities = createSelector(selectPlaceState, selectEntities);
export const selectPlaceIds = createSelector(selectPlaceState, selectIds);
export const selectPlaceTotal = createSelector(selectPlaceState, selectTotal);
export const selectSelectedPlaceId = createSelector(
    selectPlaceState,
    (state) => state.selectedPlaceId
);
export const selectSelectedPlace = createSelector(
    selectPlaceEntities,
    selectSelectedPlaceId,
    (entities, selectedId) => selectedId ? entities[selectedId] : undefined
);
export const selectLoading = createSelector(
    selectPlaceState,
    (state) => state.loading
);
export const selectError = createSelector(
    selectPlaceState,
    (state) => state.error
);
