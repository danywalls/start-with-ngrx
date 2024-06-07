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

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      home: homeReducer,
    }),
    provideStoreDevtools({
      name: 'nba-app',
      maxAge: 30,
      trace: true,
      connectInZone: true,
    }),
    provideEffects(homeEffects),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authorizationInterceptor])),
  ],
};
