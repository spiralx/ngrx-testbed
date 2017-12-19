import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HttpClientModule } from '@angular/common/http'

// ----------------------------------------------------

import { MaterialModule } from '../material'

import { ApiService } from './services'

import { AppComponent } from './containers/app/app.component'
import { DebugPanelComponent } from './components/debug-panel.component'
import { HttpClient } from '@angular/common/http/src/client';

// ----------------------------------------------------

export const COMPONENTS = [
  AppComponent,
  DebugPanelComponent
]

// ----------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // RouterModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService
      ]
    }
  }
}
