import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import { Share } from '../models'
import * as ShareActions from '../actions/shares'
import { compareByName } from './utils'

// ----------------------------------------------------

export interface State extends EntityState<Share> {}


export const adapter: EntityAdapter<Share> = createEntityAdapter<Share>({
  // sortComparer: (a: Share, b: Share) => compareByName(a.holder, b.holder),
})


export const initialState: State = adapter.getInitialState()


export function reducer (state = initialState, action: ShareActions.All): State {
  switch (action.type) {
    case ShareActions.ADD_SHARE: {
      return adapter.addOne(action.payload.share, state)
    }

    case ShareActions.ADD_SHARES: {
      return adapter.addMany(action.payload.shares, state)
    }

    case ShareActions.UPDATE_SHARE: {
      return adapter.updateOne(action.payload.share, state)
    }

    case ShareActions.UPDATE_SHARES: {
      return adapter.updateMany(action.payload.shares, state)
    }

    case ShareActions.DELETE_SHARE: {
      return adapter.removeOne(action.payload.id, state)
    }

    case ShareActions.DELETE_SHARES: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case ShareActions.LOAD_SHARES: {
      return adapter.addAll(action.payload.shares, state)
    }

    case ShareActions.CLEAR_SHARES: {
      return adapter.removeAll({ ...state, selectedUserId: null })
    }

    default: {
      return state
    }
  }
}
