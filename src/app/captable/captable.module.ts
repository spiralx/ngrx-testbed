import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

// ----------------------------------------------------

import { SharedModule } from '@app/shared'

import { SharePageComponent } from './containers/share-page.component'
import { ShareTableComponent, ShareItemComponent } from './components/share-table.component'
import { ShareInputComponent } from './components/share-input.component'

import { reducers } from './state'


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
    StoreModule.forFeature('captable', reducers)
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CaptableModule { }
