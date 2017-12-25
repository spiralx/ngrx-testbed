import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store'

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze'

import { storeLogger } from 'ngrx-store-logger'

// ----------------------------------------------------

import { environment } from '@env/environment'

import * as fromLayout from '@app/core/state/layout.reducers'

// ----------------------------------------------------

export interface State {
  layout: fromLayout.State
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
}

// ----------------------------------------------------

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout')

export const getShowSideNav = createSelector(
  getLayoutState,
  fromLayout.getShowSideNav
)

// ----------------------------------------------------

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  // default, no options
  return storeLogger()(reducer)
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [ logger, storeFreeze ]
  : []
