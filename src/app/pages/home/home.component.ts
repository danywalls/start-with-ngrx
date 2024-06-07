import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MatButton } from '@angular/material/button';
import { HomePageActions } from './state/home.actions';
import {
  selectAcceptTerms,
  selectAllTaskDone,
  selectError,
  selectLoading,
  selectPlayers,
} from './state/home.selectors';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatButton, JsonPipe],
})
export class HomeComponent implements OnInit {
  private _store = inject(Store);
  public $loading = this._store.selectSignal(selectLoading);
  public $players = this._store.selectSignal(selectPlayers);
  public $acceptTerms = this._store.selectSignal(selectAcceptTerms);
  public $allTasksDone = this._store.selectSignal(selectAllTaskDone);
  public $error = this._store.selectSignal(selectError);

  public ngOnInit(): void {
    this._store.dispatch(HomePageActions.playersLoad());
  }

  onChange() {
    this._store.dispatch(HomePageActions.acceptTerms());
  }

  onRejectTerms() {
    this._store.dispatch(HomePageActions.rejectTerms());
  }
}
