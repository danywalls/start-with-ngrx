import {createFeatureSelector, createSelector} from "@ngrx/store";
import {HomeState} from "./home.state";


export const  selectHomeState = createFeatureSelector<HomeState>('home');

export const selectLoading = createSelector(
  selectHomeState,
  (homeState) => homeState.loading
)

export const selectPlayers = createSelector(
  selectHomeState,
  (homeState) => homeState.players
)
export const selectAcceptTerms = createSelector(
  selectHomeState,
  (homeState) => homeState.acceptTerms,
)

export const selectAllTaskDone = createSelector(
  selectPlayers,
  selectAcceptTerms,
  (players, acceptTerms) => {
    return acceptTerms && players.length > 0;
  }
)
