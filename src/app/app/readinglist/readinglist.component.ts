import {Component} from '@angular/core';
import {NgModel} from "@angular/forms";
import {LibraryModel} from "../models/librarymodel";


@Component({
  selector: 'app-readinglist',
  templateUrl: './readinglist.component.html',
  styleUrls: ['./readinglist.component.css']
})
export class ReadinglistComponent {
  model = new LibraryModel();

  getName(){
    return this.model.library;
  }

  getBookItems(){
    return this.model.bookItems;
  }
}
