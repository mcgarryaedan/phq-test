import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OverviewComponent } from './overview.component';
import { BaseModule } from '../../shared/base.module';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ThankYouComponent } from '../../components/thank-you/thank-you.component';
import { BookmarkService } from '../../services/bookmark.service';

describe('OverviewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BaseModule
      ],
      providers: [
        BookmarkService
      ],
      declarations: [
        OverviewComponent,
        PaginationComponent,
        ThankYouComponent
      ],
    }).compileComponents();
  }));

  it('should create the page', () => {
    const fixture = TestBed.createComponent(OverviewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(OverviewComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bookmarks');
  });
});
