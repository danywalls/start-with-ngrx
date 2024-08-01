import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import PlacesSelectors from './state/places.selectors';
import { AsyncPipe } from '@angular/common';
import { PlacesPageActions } from './state/places.actions';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
})
export class PlacesComponent implements OnInit {
  store = inject(Store);
  places$ = this.store.select(PlacesSelectors.placesSelector);
  error$ = this.store.select(PlacesSelectors.errorSelector);

  ngOnInit(): void {
    this.store.dispatch(PlacesPageActions.loadPlaces());
  }
}
