import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// ----------------------------------------------------

// import { SharedModule } from '../shared'
import { MaterialModule } from '../material'

import { SharePageComponent } from './containers/share-page.component'
import { ShareTableComponent, ShareItemComponent } from './components/share-table.component'
import { ShareInputComponent } from './components/share-input.component'

// ----------------------------------------------------

export const COMPONENTS = [
  SharePageComponent,
  ShareTableComponent,
  ShareItemComponent,
  ShareInputComponent
]

// ----------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    // RouterModule,

    MaterialModule,


  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CaptableModule {
  static forRoot() {
    return {
      ngModule: CaptableModule
      // providers: [
      //   ApiService
      // ]
    }
  }
}
