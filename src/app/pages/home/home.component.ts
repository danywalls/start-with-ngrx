import { Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { HomeState } from './state/home.reducer';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private _store = inject(Store);

  public $acceptTerms = toSignal(
    this._store.select<HomeState>((state) => state.home.acceptTerms).pipe(),
  );
  onChange() {
    this._store.dispatch({
      type: '[Home Page] Accept Terms and Accept Terms and Accept Terms',
    });
  }
}
