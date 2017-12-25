import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/let'
import 'rxjs/add/operator/map'

// ----------------------------------------------------

import { Share, Investor } from '../models'
import { shareTableModel } from '../models/share-table'
import { State, getAllShares, getInvestorEntities } from '../state'
import * as ShareActions from '../state/shares.actions'
import * as InvestorActions from '../state/investors.actions'

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
      [data]="shareTableModel$ | async"
    ></sl-debug-panel>
  `
})
export class SharePageComponent {
  shareTableModel$ = null

  private nextId = 1

  // --------------------------------------------------

  constructor(private store: Store<State>) {
    this.shareTableModel$ = Observable
      .combineLatest(
        store.select(getAllShares),
        store.select(getInvestorEntities)
      )
      .let(shareTableModel())
  }

  // --------------------------------------------------

  addShare({ holderName, count }) {
    const id = this.nextId++

    this.store.dispatch(new InvestorActions.AddInvestor({
      investor: {
        id,
        name: holderName,
        address: null
      }
    }))

    this.store.dispatch(new ShareActions.AddShare({
      share: {
        id,
        count,
        investor: id,
        shareClass: 1
      }
    }))
  }

  // --------------------------------------------------

  deleteShare(id) {
    this.store.dispatch(new ShareActions.DeleteShare({ id }))
  }
}
