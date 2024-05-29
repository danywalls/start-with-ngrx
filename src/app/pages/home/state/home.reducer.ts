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
  on(HomePageActions.playersLoad, (state) => ({
    ...state,
    loading: true,
  })),
  on(HomePageActions.playerLoadedSuccess, (state, { players }) => ({
    ...state,
    loading: false,
    players,
  })),
);
