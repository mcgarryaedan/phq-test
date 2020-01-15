import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * This class represents the pagination component.
 * Handles pagination for previous bookmarks
 */
@Component({
  selector: 'phq-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})
export class PaginationComponent {

  public pages: number = 0; // Number of total pages
  public perPage: number = 20; // Entries per page
  @Input() cPage: number; // Current page
  @Output() setPageEmit = new EventEmitter<number>(); // set page

  // Sets number of pages based off bookmarks
  @Input()
  public set bookmarks(bookmarks: string[]) {
    this.pages = Math.floor(bookmarks.length / (this.perPage + 1));
  }

  constructor() {}

  // Converts single unit to array of numbers
  numToArr(num: number) {
    return new Array(num + 1);
  }

  // Emits to parent component to set a new page
  setPage(num: number) {
    this.setPageEmit.emit(num);
  }

}
