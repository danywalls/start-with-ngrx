import { Component, inject } from '@angular/core';
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
export class HomeComponent {
  private _store = inject(Store);

  public $acceptTerms = toSignal(
    this._store.select<HomeState>((state) => state.home.acceptTerms),
  );
  onChange() {
    this._store.dispatch(HomePageActions.acceptTerms());
  }
  onRejectTerms() {
    this._store.dispatch(HomePageActions.rejectTerms());
  }
}
