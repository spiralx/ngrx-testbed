import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { StoreModule, ActionReducer } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

// ----------------------------------------------------

import { environment } from '@env/environment'

import { reducers, metaReducers } from './reducers'

import { CoreModule } from './core'
import { CaptableModule } from './captable'
import { UsersModule } from './users'

import { AppComponent } from './core/containers/app/app.component'

// ----------------------------------------------------

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    CaptableModule,
    UsersModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    environment.production ? [] : StoreDevtoolsModule.instrument({
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
