import { createAction, createReducer, on } from '@ngrx/store';
import { initialState } from './home.state';

export const homeReducer = createReducer(
  initialState,
  on(createAction('[Home Page] Accept Terms'), (state) => ({
    ...state,
    acceptTerms: !state.acceptTerms,
  })),
  on(createAction('[Home Page] Reject Terms'), (state) => ({
    ...state,
    acceptTerms: false,
  })),
);
