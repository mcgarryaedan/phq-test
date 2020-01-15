import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OverviewModule } from './pages/overview/overview.module';
import { BookmarkService } from './services/bookmark.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OverviewModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ BookmarkService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
