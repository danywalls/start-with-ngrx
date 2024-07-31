import { Place } from '../../../entities/place.model';

export type PlacesState = {
  places: Array<Place>;
  placeSelected: Place | undefined;
  loading: boolean;
  error: string | undefined;
};

export const initialState: PlacesState = {
  error: '',
  loading: false,
  placeSelected: undefined,
  places: [],
};
