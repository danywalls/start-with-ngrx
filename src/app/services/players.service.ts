import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Player } from '../entities/player';

@Injectable({ providedIn: 'root' })
export class PlayersService {
  private _http = inject(HttpClient);

  public getPlayers() {
    return this._http
      .get<{ data: Array<Player> }>(`${environment.apiUrl}/players`)
      .pipe(
        map((response) => response.data),
        delay(5000),
      );
  }
}
