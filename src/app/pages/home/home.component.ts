import {Component, inject, model, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Store} from "@ngrx/store";
import {toSignal} from "@angular/core/rxjs-interop";
import {HomeState} from "./state/home.reducer";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {tap} from "rxjs";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private _store = inject(Store);
  public $acceptTerms = this._store.select<HomeState>((state) => state.home.acceptTerms).pipe();

  onChange() {
    this._store.dispatch({
      type: '[Home Page] Accept Terms and Accept Terms and Accept Terms'
    })
  }
}
