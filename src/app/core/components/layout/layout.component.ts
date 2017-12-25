import { Component } from '@angular/core'

// ----------------------------------------------------

@Component({
  selector: 'sl-layout',
  template: `
    <mat-sidenav-container fullscreen class="mat-app-background">
      <ng-content></ng-content>
    </mat-sidenav-container>
  `
  // styles: [
  //   `
  //     mat-sidenav-container {
  //       background: rgba(0, 0, 0, 0.03);
  //     }
  //   `
  // ]
})
export class LayoutComponent {}
