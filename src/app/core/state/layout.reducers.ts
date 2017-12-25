import { LayoutActionTypes, LayoutActions } from './layout.actions'

// ----------------------------------------------------

export interface State {
  showSideNav: boolean
}

const initialState: State = {
  showSideNav: true
}


export function reducer(state: State = initialState, action: LayoutActions) {
  switch (action.type) {
    case LayoutActionTypes.OpenSideBar:
      return {
        showSideNav: true
      }

    case LayoutActionTypes.OpenSideBar:
      return {
        showSideNav: true
      }

    default:
      return state
  }
}

export const getShowSideNav = (state: State) => state.showSideNav
