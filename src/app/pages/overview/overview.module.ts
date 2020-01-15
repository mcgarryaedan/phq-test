import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';
import { BaseModule } from '../../shared/base.module';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ThankYouComponent } from '../../components/thank-you/thank-you.component';

@NgModule({
  imports: [BaseModule],
  declarations: [OverviewComponent, PaginationComponent, ThankYouComponent],
  exports: [OverviewComponent],
})
export class OverviewModule { }
