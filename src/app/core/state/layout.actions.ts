import { Action } from '@ngrx/store'

// ----------------------------------------------------

export enum LayoutActionTypes {
  OpenSideBar = '[Layout] Open sidebar',
  CloseSideBar = '[Layout] Close sidebar'
}

export class OpenSideBar implements Action {
  readonly type = LayoutActionTypes.OpenSideBar
}

export class CloseSideBar implements Action {
  readonly type = LayoutActionTypes.CloseSideBar
}

export type LayoutActions = OpenSideBar | CloseSideBar
