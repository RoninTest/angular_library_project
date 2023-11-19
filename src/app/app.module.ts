import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReadinglistComponent} from './app/readinglist/readinglist.component';
import {FormsModule} from "@angular/forms";
import {LibraryModel} from "./app/models/librarymodel";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    ReadinglistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [LibraryModel],
  bootstrap: [AppComponent]
})
export class AppModule {
}
