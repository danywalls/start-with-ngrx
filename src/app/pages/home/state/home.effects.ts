import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlayersService } from '../../../services/players.service';
import { HomePageActions } from './home.actions';
import { catchError, concatMap, map, of } from 'rxjs';

export const loadPlayersEffect = createEffect(
  (actions$ = inject(Actions), playersService = inject(PlayersService)) => {
    return actions$.pipe(
      ofType(HomePageActions.playersLoad),
      concatMap(() =>
        playersService.getPlayers().pipe(
          map((players) => HomePageActions.playerLoadedSuccess({ players })),
          catchError((error: { message: string }) =>
            of(HomePageActions.playerLoadFailure({ message: error.message })),
          ),
        ),
      ),
    );
  },
  { functional: true },
);
