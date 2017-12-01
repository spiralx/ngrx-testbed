import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { StoreModule, ActionReducer } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { storeLogger } from 'ngrx-store-logger'

// ----------------------------------------------------

import { environment } from '../environments/environment'

import { MaterialModule } from './material.module'

import { ApiService } from './services'
import { reducers, State } from './reducers'

import { AppComponent } from './app.component'
import { SharePageComponent } from './containers/share-page.component'
import { ShareTableComponent, ShareItemComponent } from './components/share-table.component'
import { ShareInputComponent } from './components/share-input.component'
import { DebugPanelComponent } from './components/debug-panel.component'

// ----------------------------------------------------

export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger()(reducer)
}

export const metaReducers = environment.production
  ? []
  : [ logger ]

// ----------------------------------------------------

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [
    AppComponent,
    SharePageComponent,
    ShareTableComponent,
    ShareItemComponent,
    ShareInputComponent,
    DebugPanelComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
