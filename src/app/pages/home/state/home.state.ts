export interface HomeState {
  acceptTerms: boolean;
  loading: boolean;
  players: Array<any>;
}
export const initialState: HomeState = {
  acceptTerms: false,
  loading: false,
  players: [],
};
