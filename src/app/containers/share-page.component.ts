import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/let'
import 'rxjs/add/operator/map'

import { Share, User } from '../models'
import { shareTableModel } from '../models/share-table'
import { State, selectAllShares, selectUserEntities } from '../reducers/index'
import * as ShareActions from '../actions/shares'
import * as UserActions from '../actions/users'

// ----------------------------------------------------

@Component({
  selector: 'sl-share-page',
  template: `
    <h3>Share Table</h3>

    <sl-share-table
      [shares]="(shareTableModel$ | async)?.shares"
      [shareholders]="(shareTableModel$ | async)?.shareholders"
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
  user$: Observable<User[]>

  shareTableModel$ = null

  private nextId = 1

  constructor(private store: Store<State>) {
    console.dir(store)
    // this.shares$ = store.select(selectAllShares)
    // this.s$ = store.select(selectAllShares)

    this.shareTableModel$ = Observable
      .combineLatest(
        store.select(selectAllShares),
        store.select(selectUserEntities)
      )
      .let(shareTableModel())
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
