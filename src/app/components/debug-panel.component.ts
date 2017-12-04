import { Component, Input } from '@angular/core'

// ----------------------------------------------------

@Component({
  selector: 'sl-debug-panel',
  template: `
    <mat-card class="debug-panel-card">
      <mat-card-header class="bb-1">
        <mat-card-title>{{title}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <pre>{{data | json}}</pre>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-button>Copy</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .debug-panel-card.mat-card {
      max-width: 800px;
      margin: 1em auto;

      .mat-card-header-text {
        margin: 0;
      }

      .bb-1 {
        border-bottom: solid 1px #ccc;
      }

      pre {
        font: normal 0.9rem/1.4 Consolas, Inconsolata, "Courier New", monospace;
        white-space: pre-wrap;
        margin-top: 8px;
      }
    }
  `]
})
export class DebugPanelComponent {
  @Input() title = 'Debug panel'
  @Input() data
}
