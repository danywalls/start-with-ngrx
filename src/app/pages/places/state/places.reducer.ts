import { createReducer, on } from '@ngrx/store';
import { placesInitialState } from './places.state';
import { PlacesApiActions, PlacesPageActions } from './places.actions';

export const placesReducer = createReducer(
  placesInitialState,
  on(PlacesPageActions.loadPlaces, (state) => ({
    ...state,
    loading: true,
  })),
  on(PlacesApiActions.loadSuccess, (state, { places }) => ({
    ...state,
    places: [...places],
  })),
  on(PlacesApiActions.loadFailure, (state, { message }) => ({
    ...state,
    loading: false,
    error: message,
  })),
  on(PlacesApiActions.addSuccess, (state, { place }) => ({
    ...state,
    loading: false,
    places: [...state.places, place],
  })),
  on(PlacesApiActions.addFailure, (state, { message }) => ({
    ...state,
    loading: false,
    message,
  })),
  on(PlacesApiActions.updateSuccess, (state, { place }) => ({
    ...state,
    loading: false,
    places: [...state.places.filter((p) => p.id !== place.id), place],
  })),
  on(PlacesApiActions.updateFailure, (state, { message }) => ({
    ...state,
    loading: false,
    message,
  })),
  on(PlacesApiActions.deleteSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    places: [...state.places.filter((p) => p.id !== id)],
  })),
  on(PlacesApiActions.deleteFailure, (state, { message }) => ({
    ...state,
    loading: false,
    message,
  })),
);
