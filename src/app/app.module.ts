import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReadinglistComponent} from './app/readinglist/readinglist.component';
import {FormsModule} from "@angular/forms";
import {LibraryModel} from "./app/models/librarymodel";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {EmptyReadListComponent} from "./app/template/emptyReadList.component";
import {EmptyReadingListComponent} from "./app/template/emptyReadingList.component";

@NgModule({
  declarations: [
    AppComponent,
    ReadinglistComponent,
    EmptyReadListComponent,
    EmptyReadingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
  ],
  providers: [LibraryModel],
  bootstrap: [AppComponent]
})
export class AppModule {
}
