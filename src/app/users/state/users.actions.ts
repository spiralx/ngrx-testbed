import { Action } from '@ngrx/store'

// ----------------------------------------------------

import { User } from '../models'

// ----------------------------------------------------

export const LOAD_USERS = '[User] Load Users'
export const ADD_USER = '[User] Add User'
export const ADD_USERS = '[User] Add Users'
export const UPDATE_USER = '[User] Update User'
export const UPDATE_USERS = '[User] Update Users'
export const DELETE_USER = '[User] Delete User'
export const DELETE_USERS = '[User] Delete Users'
export const CLEAR_USERS = '[User] Clear Users'

export const SET_CURRENT_USER = '[User] Set Current User'
export const CLEAR_CURRENT_USER = '[User] Clear Current User'

// ----------------------------------------------------

export class LoadUsers implements Action {
  readonly type = LOAD_USERS

  constructor(public payload: { users: User[] }) {}
}

export class AddUser implements Action {
  readonly type = ADD_USER

  constructor(public payload: { user: User }) {}
}

export class AddUsers implements Action {
  readonly type = ADD_USERS

  constructor(public payload: { users: User[] }) {}
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER

  constructor(public payload: { user: { id: number, changes: User } }) {}
}

export class UpdateUsers implements Action {
  readonly type = UPDATE_USERS

  constructor(public payload: { users: { id: number, changes: User }[] }) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER

  constructor(public payload: { id: number }) {}
}

export class DeleteUsers implements Action {
  readonly type = DELETE_USERS

  constructor(public payload: { ids: number[] }) {}
}

export class ClearUsers implements Action {
  readonly type = CLEAR_USERS
}

export class SetCurrentUser implements Action {
  readonly type = SET_CURRENT_USER

  constructor(public payload: { id: number }) {}
}

export class ClearCurrentUser implements Action {
  readonly type = CLEAR_CURRENT_USER

  constructor(public payload: {}) {}
}


export type All =
 LoadUsers
 | AddUser
 | AddUsers
 | UpdateUser
 | UpdateUsers
 | DeleteUser
 | DeleteUsers
 | ClearUsers
 | SetCurrentUser
 | ClearCurrentUser
