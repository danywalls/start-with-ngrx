import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import PlacesSelectors from '../state/places.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlacesPageActions } from '../state/places.actions';

@Component({
  selector: 'app-place-edit',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './place-edit.component.html',
  styleUrl: './place-edit.component.scss',
})
export class PlaceEditComponent implements OnInit {
  store = inject(Store);
  place$ = this.store.select(PlacesSelectors.selectPlaceSelected);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.store.dispatch(PlacesPageActions.editPlace({ id }));
    }
  }
}
