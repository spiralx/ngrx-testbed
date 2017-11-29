import { Component, Output, EventEmitter } from '@angular/core'

// ----------------------------------------------------

@Component({
  selector: 'sl-share-input',
  templateUrl: './share-input.component.html',
  styles: [`
    .share-input {
      margin: 1em auto;
      display: flex;
      justify-content: center;
    }
  `]
})
export class ShareInputComponent {
  @Output() addShare = new EventEmitter()

  add(holderName, count) {
    this.addShare.emit({ holderName: holderName.value, count: count.value })
    holderName.value = ''
    count.value = '1'
  }
}
