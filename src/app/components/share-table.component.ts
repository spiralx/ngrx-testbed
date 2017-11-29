import { Component, Input, Output, EventEmitter } from '@angular/core'

// ----------------------------------------------------

@Component({
  selector: 'share-item',
  template: `
    <div class="share-item">
      <span>{{share.id}}</span>
      <span>{{share.count}}</span>
      <span>
        <button (click)="deleteShare.emit(share)"> Delete </button>
      </span>
    </div>
  `
})
export class ShareItemComponent {
  @Input() share
  @Output() deleteShare = new EventEmitter()
}

// ----------------------------------------------------

@Component({
  selector: 'share-table',
  template: `
    <div class="share-table">
      <div class="header">
        <span class="header id">Share ID</span>
        <span class="header count">Count</span>
        <span class="header actions">Actions</span>
      </div>

      <share-item
        *ngFor="let share of shares"
        [share]="share"
        (deleteShare)="deleteShare.emit(share)"
      ></share-item>
    </div>
    
    <share-input (addShare)="addShare.emit($event)"></share-input>
  `,
  styles: [`
    .share-table {
      border: solid 1px #888;
      margin: 1em auto 2em;
    }
    
    .header, .share-item {
      display: grid;
      // grid-column-gap: 0.5em;
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-areas:
         "hid*/
    }
    
    .header + share-item {
      border-top: solid 1px #888;
    }
    
    .header span, .share-item span {
      padding: 0.25em 0.5em;
    }
  `]
})
export class ShareTableComponent {
  @Input() shares
  @Output() addShare = new EventEmitter()
  @Output() deleteShare = new EventEmitter()
}
