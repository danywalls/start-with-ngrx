import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Place } from '../../../entities/place.model';

export const PlacesPageActions = createActionGroup({
  source: 'Places',
  events: {
    'Load Places': emptyProps(),
    'Add Place': props<{ place: Place }>(),
    'Update Place': props<{ place: Place }>(),
    'Delete Place': props<{ id: string }>(),
    'Cancel Place': emptyProps(),
    'Select Place': props<{ place: Place }>(),
    'UnSelect Place': emptyProps(),
  },
});

export const PlacesApiActions = createActionGroup({
  source: 'PlaceAPI',
  events: {
    'Load Success': props<{ places: Array<Place> }>(),
    'Load Failure': props<{ message: string }>(),

    'Add Success': props<{ place: Place }>(),
    'Add Failure': props<{ message: string }>(),
    'Update Success': props<{ place: Place }>(),
    'Update Failure': props<{ message: string }>(),
    'Delete Success': props<{ id: string }>(),
    'Delete Failure': props<{ message: string }>(),
  },
});
