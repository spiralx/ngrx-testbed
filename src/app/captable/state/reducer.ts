import { createSelector, createFeatureSelector } from '@ngrx/store'

// ----------------------------------------------------

import * as fromShares from './shares.reducer'
import * as fromInvestors from './investors.reducer'
import * as fromRoot from '@app/reducers'

// ----------------------------------------------------

export interface CaptableState {
  shares: fromShares.State
  investors: fromInvestors.State
}

export interface State extends fromRoot.State {
  captable: CaptableState
}

export const reducers = {
  shares: fromShares.reducer,
  investors: fromInvestors.reducer
}
