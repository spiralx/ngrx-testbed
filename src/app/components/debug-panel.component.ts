import { Component, Input } from '@angular/core'

// ----------------------------------------------------

@Component({
  selector: 'sl-debug-panel',
  template: `
    <pre>{{data | json}}</pre>
  `
})
export class DebugPanelComponent {
  @Input() data
}
