import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { selectSelectedPlace } from '../../pages/places/state/places.selectors'; // Cambia por el selector actualizado
import { PlacesPageActions } from '../../pages/places/state/places.actions';
import { Place } from '../../entities/place.model';

@Component({
  selector: 'app-place-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, AsyncPipe],
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss'],
})
export class PlaceFormComponent {
  store = inject(Store);


  placeSelected$ = this.store.select(selectSelectedPlace);

  delete(id: string) {

    this.store.dispatch(PlacesPageActions.deletePlace({ id }));
  }

  save(place: Place, name: string) {

    this.store.dispatch(
        PlacesPageActions.updatePlace({
          place: {
            ...place,
            name,
          },
        }),
    );
  }
}
