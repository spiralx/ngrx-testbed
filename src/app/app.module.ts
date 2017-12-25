import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { StoreModule, ActionReducer } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store'

// ----------------------------------------------------

import { environment } from '@env/environment'
import { routes } from './app.routes'
import { reducers, metaReducers } from './reducers'

import { CoreModule } from './core'
import { CaptableModule } from './captable'
import { UsersModule } from './users'

import { AppComponent } from './core/containers/app/app.component'

import { CustomRouterStateSerializer } from '@app/shared'

// ----------------------------------------------------

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule,

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
      environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    CoreModule,
    // CaptableModule,
    // UsersModule,
  ],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
