import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store'

// ----------------------------------------------------

import { State, adapter } from './users.reducers'

// ----------------------------------------------------

export const selectUserState = createFeatureSelector<State>('users')

export const {
  // select the array of user ids
  selectIds: selectUserIds,

  // select the dictionary of user entities
  selectEntities: selectUserEntities,

  // select the array of users
  selectAll: selectAllUsers,

  // select the total user count
  selectTotal: selectUserTotal
} = adapter.getSelectors(selectUserState)

export const getCurrentUserId = (state: State): number | null => state.currentUserId

export const selectCurrentUserId = createSelector(selectUserState, getCurrentUserId)

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
)
