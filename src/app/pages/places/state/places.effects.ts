import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { PlacesService } from '../../../services/places.service';
import { PlacesApiActions, PlacesPageActions } from './places.actions';
import { catchError, concatMap, exhaustMap, map, mergeMap, of } from 'rxjs';


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
                    map((updatedPlace) =>
                        PlacesApiActions.updateSuccess({ place: updatedPlace })
                    ),
                    catchError((error) =>
                        of(PlacesApiActions.updateFailure({ message: error.message })),
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
                    map((newPlace) => PlacesApiActions.addSuccess({ place: newPlace })),
                    catchError((error) =>
                        of(PlacesApiActions.addFailure({ message: error.message })),
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
                    map(() => PlacesApiActions.deleteSuccess({ id })),
                    catchError((error) =>
                        of(PlacesApiActions.deleteFailure({ message: error.message })),
                    ),
                ),
            ),
        );
    },
    { functional: true },
);
