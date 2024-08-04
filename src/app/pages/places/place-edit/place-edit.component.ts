import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import PlacesSelectors from '../state/places.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-place-edit',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './place-edit.component.html',
  styleUrl: './place-edit.component.scss',
})
export class PlaceEditComponent {
  store = inject(Store);
  place$ = this.store.select(PlacesSelectors.selectPlaceById);
}
