import { Component, inject, input } from '@angular/core';
import { Place } from '../../entities/place.model';
import { Store } from '@ngrx/store';
import { PlacesPageActions } from '../../pages/places/state/places.actions';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.scss',
})
export class PlaceCardComponent {
  place = input.required<Place>();
  store = inject(Store);
  router = inject(Router);

  edit() {
    this.store.dispatch(PlacesPageActions.selectPlace({ place: this.place() }));
  }

  remove() {
    this.store.dispatch(PlacesPageActions.deletePlace({ id: this.place().id }));
  }

  goEditPlace() {
    this.store.dispatch(PlacesPageActions.editPlace({ id: this.place().id }));
  }
}
