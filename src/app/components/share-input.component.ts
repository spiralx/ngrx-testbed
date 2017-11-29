import { Component, Output, EventEmitter } from '@angular/core'

// ----------------------------------------------------

@Component({
  selector: 'sl-share-input',
  template: `
    <div class="share-input">
      <form>
        <mat-form-field>
          <input matInput #holderName required placeholder="Shareholder name">
        </mat-form-field>
        <mat-form-field>
          <input matInput #count required type="number" placeholder="Share count" value="1">
        </mat-form-field>
        <button mat-raised-button	color="primary" (click)="add(holderName, count)">
          <mat-icon>add</mat-icon>
          Add Share
        </button>
      </form>
    </div>
  `,
  styles: [`
    .share-input {
      margin: 1em auto;
    }
  `]
})
export class ShareInputComponent {
  @Output() addShare = new EventEmitter()

  add(holderName, count){
    this.addShare.emit({ holderName: holderName.value, count: count.value })
    holderName.value = ''
    count.value = '1'
  }
}
