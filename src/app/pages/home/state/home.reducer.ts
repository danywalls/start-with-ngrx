import {createAction, createReducer, on} from "@ngrx/store";

export interface HomeState {
  acceptTerms: boolean
}

const initialState: HomeState = {
  acceptTerms: false,
}

export const homeReducer = createReducer(
  initialState,
  on(
    createAction('[Home Page] Accept Terms'), (state) => (
      {
      ...state,
      acceptTerms: !state.acceptTerms,
    })
  )
)
