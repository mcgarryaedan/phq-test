import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * This service represents the bookmark service.
 * Includes storage and handling of bookmark data
 */

@Injectable()
export class BookmarkService {

  // Bookmarks observerable
  private bookmarks = new Subject<any[]>();
  bookmarks$ = this.bookmarks.asObservable();

  // Some intial test data
  private initialBookmarks: string[] = [
    'test.com',
    'test1.com',
    'test2.com',
    'test3.com',
    'test4.com',
    'test5.com',
    'test6.com',
    'test7.com',
    'test8.com',
    'test9.com',
    'test10.com',
    'test11.com'
  ];

  constructor() {
    // If previous data load from storage
    if (!this.getBookmarks()) {
      this.updateStorage(this.initialBookmarks);
    }
  }

  // Add new bookmark and update array/storage
  addBookmark(bookmark: string): void {
    let bookmarks = this.getBookmarks();
    bookmarks.push(bookmark);
    this.updateStorage(bookmarks);
  }

  // Edit bookmark and update array/storage
  editBookmark(bookmark: string, index: number): void {
    let bookmarks = this.getBookmarks();
    bookmarks[index] = bookmark;
    this.updateStorage(bookmarks);
  }

  // Delete bookmark and update array/storage
  deleteBookmark(index: number): void {
    let bookmarks = this.getBookmarks();
    console.log(index);
    bookmarks.splice(index, 1);
    this.updateStorage(bookmarks);
  }

  // Get bookmarks from local storage
  getBookmarks() {
    return JSON.parse(localStorage.getItem('bookmarks'));
  }

  // Update array/storage
  updateStorage(bookmarks: string[]) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    this.bookmarks.next(bookmarks);
  }
}
