import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import PlacesSelectors from './state/places.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PlacesPageActions } from './state/places.actions';
import { PlaceCardComponent } from '../../components/place-card/place-card.component';
import { PlaceFormComponent } from '../../components/place-form/place-form.component';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [AsyncPipe, PlaceCardComponent, PlaceFormComponent, JsonPipe],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
})
export class PlacesComponent implements OnInit {
  store = inject(Store);
  places$ = this.store.select(PlacesSelectors.placesSelector);
  error$ = this.store.select(PlacesSelectors.errorSelector);
  placeSelected$ = this.store.select(PlacesSelectors.selectPlaceSelected);

  ngOnInit(): void {
    this.store.dispatch(PlacesPageActions.loadPlaces());
  }

  onClose() {
    this.store.dispatch(PlacesPageActions.unSelectPlace());
  }
}
