import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { HomeState } from './state/home.state';
import { MatButton } from '@angular/material/button';
import { HomePageActions } from './state/home.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatButton],
})
export class HomeComponent implements OnInit {
  private _store = inject(Store);
  public $loading = toSignal(this._store.select((state) => state.home.loading));
  public $players = toSignal(this._store.select((state) => state.home.players));
  public $acceptTerms = toSignal(
    this._store.select<HomeState>((state) => state.home.acceptTerms),
  );
  public ngOnInit(): void {
    this._store.dispatch(HomePageActions.playersLoad());

    setTimeout(() => {
      this._store.dispatch(
        HomePageActions.playerLoadedSuccess({
          players: [
            { id: 1, name: 'Lebron', points: 25 },
            { id: 1, name: 'Curry', points: 35 },
          ],
        }),
      );
    }, 5000);
  }

  onChange() {
    this._store.dispatch(HomePageActions.acceptTerms());
  }
  onRejectTerms() {
    this._store.dispatch(HomePageActions.rejectTerms());
  }
}
