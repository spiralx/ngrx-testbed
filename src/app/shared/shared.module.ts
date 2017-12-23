import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'


import { CdkTableModule } from '@angular/cdk/table'
import { OverlayModule } from '@angular/cdk/overlay'
import { FlexLayoutModule } from '@angular/flex-layout'

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material'

import { DebugPanelComponent } from './components/debug-panel.component'

// ----------------------------------------------------

export const COMPONENTS = [
  DebugPanelComponent
]

// ----------------------------------------------------

/**
 * NgModule that exports all  Material modules that are required to serve
 * the Plunker.
 */
@NgModule({
  declarations: COMPONENTS,
  exports: [
    // Angular modules
    CommonModule,
    ReactiveFormsModule,

    // Flex layout
    FlexLayoutModule,

    // CDk
    CdkTableModule,
    OverlayModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,

    // Our components
    ...COMPONENTS
  ]
})
export class SharedModule {}
