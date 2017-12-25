import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

// ----------------------------------------------------

import { SharedModule } from '@app/shared'

import { ApiService } from './services'

import { AppComponent } from './containers/app/app.component'
import { LayoutComponent } from './components/layout/layout.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'

// ----------------------------------------------------

export const COMPONENTS = [
  AppComponent,
  LayoutComponent,
  SidenavComponent,
  ToolbarComponent
]

// ----------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    ApiService
  ]
})
export class CoreModule {
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule')
    }
  }

  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService
      ]
    }
  }
}
