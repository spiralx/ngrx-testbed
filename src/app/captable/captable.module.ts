import { NgModule } from '@angular/core'

// ----------------------------------------------------

import { SharedModule } from '@app/shared'

import { SharePageComponent } from './containers/share-page.component'
import { ShareTableComponent, ShareItemComponent } from './components/share-table.component'
import { ShareInputComponent } from './components/share-input.component'

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
    SharedModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CaptableModule { }
