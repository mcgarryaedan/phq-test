import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * This class represents the thank you page which shows after submission.
 */
@Component({
  selector: 'phq-thank-you',
  templateUrl: 'thank-you.component.html',
  styleUrls: ['thank-you.component.scss']
})
export class ThankYouComponent {
  @Input() cValue: string = ''; // Value of current add bookmark entry

  @Output() setBack = new EventEmitter<boolean>(); // Go back to overview page

  // Go back to overview page emitter
  goBack() {
    this.setBack.emit(true);
  }
}
