import { Place } from '../../../entities/place.model';

export type PlacesState = {
  places: Array<Place>;
  placeSelected: Place | undefined;
  loading: boolean;
  error: string | undefined;
};

export const placesInitialState: PlacesState = {
  error: '',
  loading: false,
  placeSelected: undefined,
  places: [
    {
      id: '1',
      name: 'Toro',
      description: 'Great viewss',
      price: 0,
      stars: 3,
    },
  ],
};
