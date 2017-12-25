import { createSelector, createFeatureSelector } from '@ngrx/store'
import { CaptableState } from './reducer'

import * as fromShares from './shares.reducer'
import * as fromInvestors from './investors.reducer'

// ----------------------------------------------------

export const getCaptableState = createFeatureSelector<CaptableState>('captable')

// ----------------------------------------------------

export const getShareEntitiesState = createSelector(getCaptableState, state => state.shares)

export const {
  // select the array of share ids
  selectIds: getShareIds,

  // select the dictionary of share entities
  selectEntities: getShareEntities,

  // select the array of shares
  selectAll: getAllShares,

  // select the total share count
  selectTotal: getShareTotal
} = fromShares.adapter.getSelectors(getShareEntitiesState)

// ----------------------------------------------------

export const getInvestorEntitiesState = createSelector(getCaptableState, state => state.investors)

export const {
  // select the array of share ids
  selectIds: getInvestorIds,

  // select the dictionary of share entities
  selectEntities: getInvestorEntities,

  // select the array of shares
  selectAll: getAllInvestors,

  // select the total share count
  selectTotal: getInvestorTotal
} = fromInvestors.adapter.getSelectors(getInvestorEntitiesState)
