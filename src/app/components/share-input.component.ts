import { Component, Output, EventEmitter } from '@angular/core'
import { FormControl, Validators, NgForm } from '@angular/forms'

// ----------------------------------------------------

function getName(): string {
  const v = Math.floor(Math.random() * 10)
  return [
    'James Skinner',
    'Bob Lob',
    'Rachel Otterway',
    'Mike Hunt',
    'Dick Weasel',
    'John Smith',
    'Phil Asheo',
    'John-Saul Montoya',
    'Puss Cat',
    'Corinne Mayes'
  ][v]
}

function getCount(): number {
  const v = Math.floor(Math.random() * 10)
  return (v + 1) * 1e3
}

// ----------------------------------------------------

export class ShareInput {
  constructor(
    public holderName: string = getName(),
    public count: number = getCount()
  ) {}
}

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

  model = new ShareInput()

  submit() {
    console.dir(this.model)
    this.addShare.emit(this.model)
    this.model = new ShareInput()
  }
}
