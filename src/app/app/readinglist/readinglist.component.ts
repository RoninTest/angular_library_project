import {Component} from '@angular/core';
import {NgModel} from "@angular/forms";
import {LibraryModel, BookItems} from "../models/librarymodel";


@Component({
  selector: 'app-readinglist',
  templateUrl: './readinglist.component.html',
  styleUrls: ['./readinglist.component.css']
})
export class ReadinglistComponent {

  constructor(private libraryModel: LibraryModel) {
  }

  getName() {
    return this.libraryModel.library;
  }

  getReadingBookItems() {
    return this.libraryModel.bookItems
      .filter(item => !item.action);
  }

  getReadedBookItems(){
    return this.libraryModel.bookItems
      .filter(item => item.action);
  }

  addItem(value:string){
    if (value.trim() !== ''){
      this.libraryModel.bookItems.push(new BookItems(value,false));
    }
  }

}
