import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReadinglistComponent } from './app/readinglist/readinglist.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadinglistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
