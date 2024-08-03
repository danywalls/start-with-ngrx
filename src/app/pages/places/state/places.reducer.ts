import { createReducer, on } from '@ngrx/store';
import { placesInitialState } from './places.state';
import { PlacesApiActions, PlacesPageActions } from './places.actions';

export const placesReducer = createReducer(
  placesInitialState,
  on(PlacesPageActions.loadPlaces, (state) => ({
    ...state,
    loading: true,
  })),
  on(PlacesPageActions.selectPlace, (state, { place }) => ({
    ...state,
    placeSelected: place,
  })),
  on(PlacesPageActions.unSelectPlace, (state) => ({
    ...state,
    placeSelected: undefined,
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
  on(PlacesApiActions.getPlaceSuccess, (state, { place }) => ({
    ...state,
    loading: false,
    placeSelected: place,
  })),
  on(PlacesApiActions.getPlaceFailure, (state, { message }) => ({
    ...state,
    loading: false,
    message,
  })),

  on(PlacesApiActions.updateSuccess, (state, { place }) => ({
    ...state,
    loading: false,
    placeSelected: undefined,
    places: state.places.map((p) => (p.id === place.id ? place : p)),
  })),
  on(PlacesApiActions.updateFailure, (state, { message }) => ({
    ...state,
    loading: false,
    message,
  })),
  on(PlacesApiActions.deleteSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    placeSelected: undefined,
    places: [...state.places.filter((p) => p.id !== id)],
  })),
  on(PlacesApiActions.deleteFailure, (state, { message }) => ({
    ...state,
    loading: false,
    message,
  })),
);
