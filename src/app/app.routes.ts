import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PlacesComponent } from './pages/places/places.component';

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
    path: '**',
    redirectTo: '',
  },
];
