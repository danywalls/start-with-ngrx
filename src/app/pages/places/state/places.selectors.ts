import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlacesState } from './places.state';
import { getRouterSelectors } from '@ngrx/router-store';

const selectPlaceState = createFeatureSelector<PlacesState>('places');

const selectPlaces = createSelector(
  selectPlaceState,
  (placeState) => placeState.places,
);

const selectPlaceSelected = createSelector(
  selectPlaceState,
  (placeState) => placeState.placeSelected,
);
const selectLoading = createSelector(
  selectPlaceState,
  (placeState) => placeState.loading,
);
const selectError = createSelector(
  selectPlaceState,
  (placeState) => placeState.error,
);

export const { selectRouteParams } = getRouterSelectors();

export const selectPlaceById = createSelector(
  selectPlaces,
  selectRouteParams,
  (places, { id }) => {
    return places.find((place) => place.id === id)},
);

export default {
  placesSelector: selectPlaces,
  selectPlaceSelected: selectPlaceSelected,
  loadingSelector: selectLoading,
  errorSelector: selectError,
  selectPlaceById,
};
