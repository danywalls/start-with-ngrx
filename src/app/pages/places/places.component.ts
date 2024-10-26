import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import  {selectAllPlaces, selectError, selectSelectedPlace} from './state/places.selectors';
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
  places$ = this.store.select(selectAllPlaces);
  error$ = this.store.select(selectError);
  placeSelected$ = this.store.select(selectSelectedPlace);

  ngOnInit(): void {
    this.store.dispatch(PlacesPageActions.loadPlaces());
  }

  onClose() {
    this.store.dispatch(PlacesPageActions.unSelectPlace());
  }
}
