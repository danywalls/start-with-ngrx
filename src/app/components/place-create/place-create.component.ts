import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlacesPageActions } from '../../pages/places/state/places.actions';
import { Place } from '../../entities/place.model';

@Component({
  selector: 'app-place-create',
  standalone: true,
  imports: [],
  templateUrl: './place-create.component.html',
  styleUrl: './place-create.component.scss',
})
export class PlaceCreateComponent {
  store = inject(Store);

  add(name: string) {
    let placeFake: Place = {
      avatar: undefined,
      createdAt: '',
      description: '',
      id: Math.random().toString(),
      price: 0,
      stars: 0,
      name,
    };
    this.store.dispatch(
      PlacesPageActions.addPlace({
        place: placeFake,
      }),
    );
  }
}
