import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PlacesComponent } from './pages/places/places.component';
import { PlaceEditComponent } from './pages/places/place-edit/place-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: PlacesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'places',
    component: PlacesComponent,
  },
  {
    path: 'places/:id',
    component: PlaceEditComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
