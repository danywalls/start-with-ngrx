import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlacesPageActions } from './state/places.actions';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
})
export class PlacesComponent implements OnInit {
  store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(PlacesPageActions.loadPlaces());
  }
}
