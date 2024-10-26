import { createReducer, on } from '@ngrx/store';
import { adapter, placesInitialState } from './places.state';
import { PlacesApiActions, PlacesPageActions } from './places.actions';

export const placesReducer = createReducer(
    placesInitialState,
    on(PlacesPageActions.loadPlaces, (state) => ({
        ...state,
        loading: true,
    })),
    on(PlacesApiActions.loadSuccess, (state, { places }) =>
        adapter.setAll(places, { ...state, loading: false })
    ),
    on(PlacesApiActions.loadFailure, (state, { message }) => ({
        ...state,
        loading: false,
        error: message,
    })),
    on(PlacesApiActions.addSuccess, (state, { place }) =>
        adapter.addOne(place, { ...state, loading: false })
    ),
    on(PlacesApiActions.addFailure, (state, { message }) => ({
        ...state,
        loading: false,
        error: message,
    })),
    on(PlacesApiActions.updateSuccess, (state, { place }) =>
        adapter.updateOne({ id: place.id, changes: place }, { ...state, loading: false })
    ),
    on(PlacesApiActions.updateFailure, (state, { message }) => ({
        ...state,
        loading: false,
        error: message,
    })),
    on(PlacesApiActions.deleteSuccess, (state, { id }) =>
        adapter.removeOne(id, { ...state, loading: false })
    ),
    on(PlacesApiActions.deleteFailure, (state, { message }) => ({
        ...state,
        loading: false,
        error: message,
    })),
    on(PlacesPageActions.selectPlace, (state, { place }) => ({
        ...state,
        selectedPlaceId: place.id,
    })),
    on(PlacesPageActions.unSelectPlace, (state) => ({
        ...state,
        selectedPlaceId: null,
    }))
);
