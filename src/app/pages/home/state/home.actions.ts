import { createActionGroup, emptyProps } from '@ngrx/store';

export const HomePageActions = createActionGroup({
  source: 'Home Page',
  events: {
    'Accept Terms': emptyProps(),
    'Reject Terms': emptyProps(),
  },
});
