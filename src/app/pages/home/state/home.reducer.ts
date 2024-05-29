import { createReducer, on } from '@ngrx/store';
import { initialState } from './home.state';
import { HomePageActions } from './home.actions';

export const homeReducer = createReducer(
  initialState,
  on(HomePageActions.acceptTerms, (state) => ({
    ...state,
    acceptTerms: !state.acceptTerms,
  })),
  on(HomePageActions.rejectTerms, (state) => ({
    ...state,
    acceptTerms: false,
  })),
);
