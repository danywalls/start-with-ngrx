import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Place } from '../../../entities/place.model';

export interface PlacesState extends EntityState<Place> {

  selectedPlaceId: string | null;
  loading: boolean;
  error: string | undefined;
}

export const adapter: EntityAdapter<Place> = createEntityAdapter<Place>();

export const placesInitialState: PlacesState = adapter.getInitialState({
  selectedPlaceId: null,
  loading: false,
  error: '',
});