import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import { User } from '../models'
import * as UserActions from '../actions/users'
import { compareByName } from './utils'

// ----------------------------------------------------

export interface State extends EntityState<User> {
  // additional entities state properties
  currentUserId: number | null
}


export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: compareByName
})


export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  currentUserId: null
})


export function reducer(
  state = initialState,
  action: UserActions.All
): State {
  switch (action.type) {
    case UserActions.ADD_USER: {
      return adapter.addOne(action.payload.user, state)
    }

    case UserActions.ADD_USERS: {
      return adapter.addMany(action.payload.users, state)
    }

    case UserActions.UPDATE_USER: {
      return adapter.updateOne(action.payload.user, state)
    }

    case UserActions.UPDATE_USERS: {
      return adapter.updateMany(action.payload.users, state)
    }

    case UserActions.DELETE_USER: {
      return adapter.removeOne(action.payload.id, state)
    }

    case UserActions.DELETE_USERS: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case UserActions.LOAD_USERS: {
      return adapter.addAll(action.payload.users, state)
    }

    case UserActions.CLEAR_USERS: {
      return adapter.removeAll({ ...state, currentUserId: null })
    }

    case UserActions.SET_CURRENT_USER: {
      return { ...state, currentUserId: action.payload.id }
    }

    case UserActions.CLEAR_CURRENT_USER: {
      return { ...state, currentUserId: null }
    }

    default: {
      return state
    }
  }
}

export const getCurrentUserId = (state: State): number | null => state.currentUserId
