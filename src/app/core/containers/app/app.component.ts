import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

// ----------------------------------------------------

import { State, getShowSideNav } from '@app/reducers'

// ----------------------------------------------------

@Component({
  selector: 'sl-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  showSideNav$: Observable<boolean>

  constructor(private store: Store<State>) {
    this.showSideNav$ = this.store.select(getShowSideNav)
  }
}
