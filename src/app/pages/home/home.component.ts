import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MatButton } from '@angular/material/button';
import { HomePageActions } from './state/home.actions';
import {selectAcceptTerms, selectAllTaskDone, selectLoading, selectPlayers} from "./state/home.selectors";
import {PlayersService} from "../../services/players.service";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatButton],
})
export class HomeComponent implements OnInit {
  private _store = inject(Store);
  private _playersService = inject(PlayersService);
  public $loading = this._store.selectSignal(selectLoading);
  public $players = this._store.selectSignal(selectPlayers);
  public $acceptTerms = this._store.selectSignal(selectAcceptTerms);
  public $allTasksDone = this._store.selectSignal(selectAllTaskDone);

  public ngOnInit(): void {
    this._store.dispatch(HomePageActions.playersLoad());

    this._playersService.getPlayers().subscribe(players => {
      this._store.dispatch(HomePageActions.playerLoadedSuccess({
        players
      }))
    })
  }

  onChange() {
    this._store.dispatch(HomePageActions.acceptTerms());
  }
  onRejectTerms() {
    this._store.dispatch(HomePageActions.rejectTerms());
  }
}
