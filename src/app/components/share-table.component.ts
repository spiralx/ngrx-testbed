import { Component, Input, Output, EventEmitter } from '@angular/core'

// ----------------------------------------------------

@Component({
  selector: 'sl-share-item',
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
  selector: 'sl-share-table',
  template: `
    <div class="share-table">
      <div class="header">
        <span class="header id">Share ID</span>
        <span class="header count">Count</span>
        <span class="header actions">Actions</span>
      </div>

      <sl-share-item
        *ngFor="let share of shares"
        [share]="share"
        (deleteShare)="deleteShare.emit(share)"
      ></sl-share-item>
    </div>

    <sl-share-input (addShare)="addShare.emit($event)"></sl-share-input>
  `,
  styleUrls: [ './share-table.component.scss' ]
})
export class ShareTableComponent {
  @Input() shares
  @Output() addShare = new EventEmitter()
  @Output() deleteShare = new EventEmitter()
}
