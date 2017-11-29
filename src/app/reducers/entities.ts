import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store'

import * as fromShares from './shares'
import * as fromUsers from './users'

// ----------------------------------------------------

export interface State {
  shares: fromShares.State,
  users: fromUsers.State
}

// ----------------------------------------------------

export const reducers: ActionReducerMap<State> = {
  shares: fromShares.reducer,
  users: fromUsers.reducer
}

// ----------------------------------------------------

export const selectShareState = createFeatureSelector<fromShares.State>('shares')

export const {
  // select the array of share ids
  selectIds: selectShareIds,

  // select the dictionary of share entities
  selectEntities: selectShareEntities,

  // select the array of shares
  selectAll: selectAllShares,

  // select the total share count
  selectTotal: selectShareTotal
} = fromShares.adapter.getSelectors(selectShareState)

// ----------------------------------------------------

export const selectUserState = createFeatureSelector<fromUsers.State>('users')

export const {
  // select the array of user ids
  selectIds: selectUserIds,

  // select the dictionary of user entities
  selectEntities: selectUserEntities,

  // select the array of users
  selectAll: selectAllUsers,

  // select the total user count
  selectTotal: selectUserTotal
} = fromUsers.adapter.getSelectors(selectUserState)

export const selectCurrentUserId = createSelector(selectUserState, fromUsers.getCurrentUserId)

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
)
