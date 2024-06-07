import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const HomePageActions = createActionGroup({
  source: 'Home Page',
  events: {
    'Accept Terms': emptyProps(),
    'Reject Terms': emptyProps(),
    'Players Load': emptyProps(),
    'Player Loaded Success': props<{ players: Array<any> }>(),
    'Player Load Failure': props<{ message: string }>(),
  },
});
