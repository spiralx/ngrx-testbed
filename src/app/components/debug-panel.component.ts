import { Component, Input } from '@angular/core'

// ----------------------------------------------------

@Component({
  selector: 'sl-debug-panel',
  template: `
    <mat-card class="debug-panel-card">
      <mat-card-header color="primary">
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
    .debug-panel-card {
      max-width: 800px;
      margin: 1em auto;

      pre {
        font: normal 0.9rem/1.4 Consolas, Inconsolata, "Courier New", monospace;
        white-space: pre-wrap;
      }
    }
  `]
})
export class DebugPanelComponent {
  @Input() title = 'Debug panel'
  @Input() data
}
