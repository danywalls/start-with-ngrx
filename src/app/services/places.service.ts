import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Place } from '../entities/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private http = inject(HttpClient);

  add(place: Place): Observable<Place> {
    return this.http.post<Place>(environment.menorcaPlacesAPI, place);
  }

  update(place: Place): Observable<Place> {
    return this.http.put<Place>(environment.menorcaPlacesAPI, place);
  }

  getAll(): Observable<Array<Place>> {
    return this.http.get<Array<Place>>(environment.menorcaPlacesAPI);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(`${environment.menorcaPlacesAPI}/${id}`);
  }
}
