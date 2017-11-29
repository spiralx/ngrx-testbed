import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import { State, selectAllShares } from './reducers'

// ----------------------------------------------------

@Component({
  selector: 'sl-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  name = 'James'

  constructor(private store: Store<State>) {

  }
}
