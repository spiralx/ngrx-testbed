import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

// ----------------------------------------------------

import { Investor } from '../models'
import * as InvestorActions from './investors.actions'

// import { compareByName } from '@app/shared/utils/state'

// ----------------------------------------------------

export interface State extends EntityState<Investor> {}


export const adapter: EntityAdapter<Investor> = createEntityAdapter<Investor>({
  // sortComparer: (a: Investor, b: Investor) => compareByName(a.holder, b.holder),
})


export const initialState: State = adapter.getInitialState()


export function reducer (state = initialState, action: InvestorActions.All): State {
  switch (action.type) {
    case InvestorActions.ADD_INVESTOR: {
      return adapter.addOne(action.payload.investor, state)
    }

    case InvestorActions.ADD_INVESTORS: {
      return adapter.addMany(action.payload.investors, state)
    }

    case InvestorActions.UPDATE_INVESTOR: {
      return adapter.updateOne(action.payload.investor, state)
    }

    case InvestorActions.UPDATE_INVESTORS: {
      return adapter.updateMany(action.payload.investors, state)
    }

    case InvestorActions.DELETE_INVESTOR: {
      return adapter.removeOne(action.payload.id, state)
    }

    case InvestorActions.DELETE_INVESTORS: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case InvestorActions.LOAD_INVESTORS: {
      return adapter.addAll(action.payload.investors, state)
    }

    case InvestorActions.CLEAR_INVESTORS: {
      return adapter.removeAll({ ...state })
    }

    default: {
      return state
    }
  }
}
