import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { inject } from '@angular/core';
import { PlacesService } from '../../../services/places.service';
import { PlacesApiActions, PlacesPageActions } from './places.actions';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs';
import { Router } from '@angular/router';

export const initPlacesState$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map((action) => PlacesPageActions.loadPlaces()),
    );
  },
  { functional: true },
);

export const returnHomeEffect$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(PlacesPageActions.cancelPlace),
      tap(() => router.navigate(['/places'])),
    );
  },
  {
    dispatch: false,
    functional: true,
  },
);

export const loadPlacesEffect$ = createEffect(
  (actions$ = inject(Actions), placesService = inject(PlacesService)) => {
    return actions$.pipe(
      ofType(PlacesPageActions.loadPlaces),
      exhaustMap(() =>
        placesService.getAll().pipe(
          map((places) => PlacesApiActions.loadSuccess({ places })),
          catchError((error) =>
            of(PlacesApiActions.loadFailure({ message: error.message })),
          ),
        ),
      ),
    );
  },

  { functional: true },
);

export const updatePlaceEffect$ = createEffect(
  (actions$ = inject(Actions), placesService = inject(PlacesService)) => {
    return actions$.pipe(
      ofType(PlacesPageActions.updatePlace),
      concatMap(({ place }) =>
        placesService.update(place).pipe(
          map((apiPlace) =>
            PlacesApiActions.updateSuccess({ place: apiPlace }),
          ),
          catchError((error) =>
            of(PlacesApiActions.updateFailure({ message: error })),
          ),
        ),
      ),
    );
  },

  { functional: true },
);

export const addPlaceEffect$ = createEffect(
  (actions$ = inject(Actions), placesService = inject(PlacesService)) => {
    return actions$.pipe(
      ofType(PlacesPageActions.addPlace),
      mergeMap(({ place }) =>
        placesService.add(place).pipe(
          map((apiPlace) => PlacesApiActions.addSuccess({ place: apiPlace })),
          catchError((error) =>
            of(PlacesApiActions.addFailure({ message: error })),
          ),
        ),
      ),
    );
  },
  { functional: true },
);

export const deletePlaceSuccessEffect$ = createEffect(
  (actions$ = inject(Actions), placesService = inject(PlacesService)) => {
    return actions$.pipe(
      ofType(PlacesApiActions.deleteSuccess),
      mergeMap(() =>
        placesService.getAll().pipe(
          map((places) => PlacesApiActions.loadSuccess({ places })),
          catchError((error) =>
            of(PlacesApiActions.loadFailure({ message: error.message })),
          ),
        ),
      ),
    );
  },
  { functional: true },
);

export const deletePlaceEffect$ = createEffect(
  (actions$ = inject(Actions), placesService = inject(PlacesService)) => {
    return actions$.pipe(
      ofType(PlacesPageActions.deletePlace),
      mergeMap(({ id }) =>
        placesService.delete(id).pipe(
          map((id_response) =>
            PlacesApiActions.deleteSuccess({ id: id_response }),
          ),
          catchError((error) =>
            of(PlacesApiActions.deleteFailure({ message: error })),
          ),
        ),
      ),
    );
  },
  { functional: true },
);
