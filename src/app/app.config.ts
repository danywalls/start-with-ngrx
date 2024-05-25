import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore, StoreModule} from "@ngrx/store";
import {homeReducer} from "./pages/home/state/home.reducer";

export const appConfig = {
  providers: [provideRouter(routes),
   provideStore(
     {
       home: homeReducer,
     }
   )
  ]
};
