import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'

// ----------------------------------------------------

import { SharedModule } from '@app/shared'

import { SharePageComponent } from './containers/share-page.component'
import { ShareTableComponent, ShareItemComponent } from './components/share-table.component'
import { ShareInputComponent } from './components/share-input.component'

import { reducers } from './state'


// ----------------------------------------------------

const routes: Routes = [
  { path: '', component: SharePageComponent }
]

// ----------------------------------------------------

const COMPONENTS = [
  SharePageComponent,
  ShareTableComponent,
  ShareItemComponent,
  ShareInputComponent
]

// ----------------------------------------------------

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('captable', reducers)
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CaptableModule { }
