import {Player} from "../../../entities/player";

export interface HomeState {
  acceptTerms: boolean;
  loading: boolean;
  players: Array<Player>;
}
export const initialState: HomeState = {
  acceptTerms: false,
  loading: false,
  players: [],
};
