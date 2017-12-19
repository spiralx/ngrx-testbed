import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { StoreModule, ActionReducer } from '@ngrx/store'

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { storeLogger } from 'ngrx-store-logger'

// ----------------------------------------------------

import { environment } from '../environments/environment'

import { reducers, State } from './reducers'

import { CoreModule } from './core'
import { CaptableModule } from './captable'

import { AppComponent } from './core/containers/app/app.component'

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
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  // declarations: [],
  // providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
