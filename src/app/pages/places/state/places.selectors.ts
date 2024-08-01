import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlacesState } from './places.state';

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

export default {
  placesSelector: selectPlaces,
  selectPlaceSelected: selectPlaceSelected,
  loadingSelector: selectLoading,
  errorSelector: selectError,
};
