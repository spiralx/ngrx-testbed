import { Component, Input } from '@angular/core'

@Component({
  selector: 'sl-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() open = false
}
