import { Action } from '@ngrx/store'

import { Investor } from '../models'

// ----------------------------------------------------

export const LOAD_INVESTORS = '[Investor] Load Investors'
export const ADD_INVESTOR = '[Investor] Add Investor'
export const ADD_INVESTORS = '[Investor] Add Investors'
export const UPDATE_INVESTOR = '[Investor] Update Investor'
export const UPDATE_INVESTORS = '[Investor] Update Investors'
export const DELETE_INVESTOR = '[Investor] Delete Investor'
export const DELETE_INVESTORS = '[Investor] Delete Investors'
export const CLEAR_INVESTORS = '[Investor] Clear Investors'

// ----------------------------------------------------

export class LoadInvestors implements Action {
  readonly type = LOAD_INVESTORS

  constructor(public payload: { investors: Investor[] }) {}
}

export class AddInvestor implements Action {
  readonly type = ADD_INVESTOR

  constructor(public payload: { investor: Investor }) {}
}

export class AddInvestors implements Action {
  readonly type = ADD_INVESTORS

  constructor(public payload: { investors: Investor[] }) {}
}

export class UpdateInvestor implements Action {
  readonly type = UPDATE_INVESTOR

  constructor(public payload: { investor: { id: number, changes: Investor } }) {}
}

export class UpdateInvestors implements Action {
  readonly type = UPDATE_INVESTORS

  constructor(public payload: { investors: { id: number, changes: Investor }[] }) {}
}

export class DeleteInvestor implements Action {
  readonly type = DELETE_INVESTOR

  constructor(public payload: { id: number }) {}
}

export class DeleteInvestors implements Action {
  readonly type = DELETE_INVESTORS

  constructor(public payload: { ids: number[] }) {}
}

export class ClearInvestors implements Action {
  readonly type = CLEAR_INVESTORS
}

export type All =
 LoadInvestors
 | AddInvestor
 | AddInvestors
 | UpdateInvestor
 | UpdateInvestors
 | DeleteInvestor
 | DeleteInvestors
 | ClearInvestors
