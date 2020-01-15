import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookmarkService } from '../../services/bookmark.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
/**
 * This class represents the lazy loaded OverviewComponent.
 * Includes bookmark url add, edit and delete.
 */
@Component({
  selector: 'phq-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.scss']
})

export class OverviewComponent implements OnInit {
  private urlRegex: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; // url regex including non-http domains
  private editVal: number | null = null; // index of bookmark currently being edited (null is none)
  invalidBookmark: boolean = false; // Marks if bookmark url is invalid
  invalidEditBookmark: boolean = false; // Marks if edit bookmark url is invalid
  bookmarks: string[]; // Array of current bookmarks
  cPage: number = 0; // Current Page
  perPage: number = 20; // Number of entries per page
  bookmarkForm: FormGroup; // Bookmark Form group
  bookmarkEditForm: FormGroup; // Bookmark edit form group
  cValue: string = ''; // current value for add bookmark
  formSubmitted: boolean = false; // Is form submitted (show thank you page)
  faEdit = faEdit;
  faTimes = faTimes;

  constructor(
    public fb: FormBuilder,
    private bookmarkService: BookmarkService
  ) {}

  ngOnInit() {
      // Initiailise formgroup with bookmark validation
      this.bookmarkForm = this.fb.group({
          bookmark: ['', [Validators.required, Validators.pattern(this.urlRegex)]]
      });
      this.bookmarkEditForm = this.fb.group({
          bookmark: ['', [Validators.required, Validators.pattern(this.urlRegex)]]
      });

      // Get initial/stored bookmarks
      this.bookmarks = this.bookmarkService.getBookmarks();
      this.bookmarkService.bookmarks$
        // .takeUntil(this.unsubscribe)
        .subscribe(res => {
          this.bookmarks = res;
        });
  }

  // Calculate start position for page in array
  startPos() {
    return this.cPage * this.perPage;
  }

  // Set current page
  setPage(page: number) {
    this.cPage = page;
  }

  // Quick access to bookmark input in form group
  get bookmark() {
    return this.bookmarkForm.get('bookmark');
  }
  get bookmarkEdit() {
    return this.bookmarkEditForm.get('bookmark');
  }

  // On form submission handler
  onSubmit() {
    this.invalidBookmark = !this.bookmarkForm.valid;
    if(!this.invalidBookmark) {
      this.bookmarkService.addBookmark(this.bookmark.value);
      this.cValue = this.bookmark.value;
      this.bookmarkForm.reset();
      this.formSubmitted = true;
    }
  }

  // Set bookmark into edit mode
  editBookmark(num: number) {
    this.editVal = this.editVal === num ? null : num;
  }

  // Check if current bookmark is being edited
  isEditing(num: number) {
    return this.editVal === num;
  }

  // On save edit check if valid and then updates stored values
  onEdit() {
    this.invalidEditBookmark = !this.bookmarkEditForm.valid;
    if(!this.invalidEditBookmark) {
      this.bookmarkService.editBookmark(this.bookmarkEdit.value, this.startPos() + this.editVal);
      this.editVal = null;
    }
    if (this.bookmarkEdit.value === '') {
      this.invalidEditBookmark = false;
      this.editVal = null;
    }
  }

  // Deletes bookmark and updates stored values
  deleteBookmark(index: number) {
    if(confirm('Are you sure to delete  '+ this.bookmarks[index])) {
      this.bookmarkService.deleteBookmark(this.startPos() + index);
      this.editVal = null;
    }
  }

  // Go back to overview page from thank you page
  setBack() {
    this.formSubmitted = false;
  }
}
