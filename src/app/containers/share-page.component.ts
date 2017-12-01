import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { Share } from '../models'
import { State, selectAllShares } from '../reducers/index'
import * as ShareActions from '../actions/shares'
import * as UserActions from '../actions/users'

// ----------------------------------------------------

@Component({
  selector: 'sl-share-page',
  template: `
    <h3>Share Table</h3>

    <sl-share-table
      [shares]="shares$ | async"
      (addShare)="addShare($event)"
      (deleteShare)="deleteShare($event)"
    ></sl-share-table>

    <sl-debug-panel
      title="Store: All shares"
      [data]="shares$ | async"
    ></sl-debug-panel>
  `
})
export class SharePageComponent {
  shares$: Observable<Share[]>

  private nextId = 1

  constructor(private store: Store<State>) {
    console.dir(store)
    this.shares$ = store.select(selectAllShares)
  }

  addShare({ holderName, count }) {
    const id = this.nextId++

    this.store.dispatch(new UserActions.AddUser({
      user: {
        id,
        name: holderName
      }
    }))

    this.store.dispatch(new ShareActions.AddShare({
      share: {
        id,
        count,
        holder: id,
        shareClass: 1
      }
    }))
  }

  deleteShare(id) {
    this.store.dispatch(new ShareActions.DeleteShare({ id }))
  }
}
