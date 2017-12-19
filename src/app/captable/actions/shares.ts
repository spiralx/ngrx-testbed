import { Action } from '@ngrx/store'

import { Share } from '../models'

// ----------------------------------------------------

export const LOAD_SHARES = '[Share] Load Shares'
export const ADD_SHARE = '[Share] Add Share'
export const ADD_SHARES = '[Share] Add Shares'
export const UPDATE_SHARE = '[Share] Update Share'
export const UPDATE_SHARES = '[Share] Update Shares'
export const DELETE_SHARE = '[Share] Delete Share'
export const DELETE_SHARES = '[Share] Delete Shares'
export const CLEAR_SHARES = '[Share] Clear Shares'

// ----------------------------------------------------

export class LoadShares implements Action {
  readonly type = LOAD_SHARES

  constructor(public payload: { shares: Share[] }) {}
}

export class AddShare implements Action {
  readonly type = ADD_SHARE

  constructor(public payload: { share: Share }) {}
}

export class AddShares implements Action {
  readonly type = ADD_SHARES

  constructor(public payload: { shares: Share[] }) {}
}

export class UpdateShare implements Action {
  readonly type = UPDATE_SHARE

  constructor(public payload: { share: { id: number, changes: Share } }) {}
}

export class UpdateShares implements Action {
  readonly type = UPDATE_SHARES

  constructor(public payload: { shares: { id: number, changes: Share }[] }) {}
}

export class DeleteShare implements Action {
  readonly type = DELETE_SHARE

  constructor(public payload: { id: number }) {}
}

export class DeleteShares implements Action {
  readonly type = DELETE_SHARES

  constructor(public payload: { ids: number[] }) {}
}

export class ClearShares implements Action {
  readonly type = CLEAR_SHARES
}

export type All =
 LoadShares
 | AddShare
 | AddShares
 | UpdateShare
 | UpdateShares
 | DeleteShare
 | DeleteShares
 | ClearShares
