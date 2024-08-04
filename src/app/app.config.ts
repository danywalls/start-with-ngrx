import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { homeReducer } from './pages/home/state/home.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authorizationInterceptor } from './interceptors/authorization.interceptor';
import { provideEffects } from '@ngrx/effects';
import * as homeEffects from './pages/home/state/home.effects';
import * as placesEffects from './pages/places/state/places.effects';
import { placesReducer } from './pages/places/state/places.reducer';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      router: routerReducer,
      home: homeReducer,
      places: placesReducer,
    }),
    provideStoreDevtools({
      name: 'nba-app',
      maxAge: 30,
      trace: true,
      connectInZone: true,
    }),
    provideEffects([homeEffects, placesEffects]),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authorizationInterceptor])),
    provideRouterStore(),
  ],
};
