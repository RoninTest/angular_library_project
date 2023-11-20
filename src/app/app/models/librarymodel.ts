export class LibraryModel {
  library;
  bookItems;

  constructor() {
    this.library = "My";
    this.bookItems = [
      new BookItems("The Metamorphosis", true),
      new BookItems("To Kill a Mockingbird", false),
      new BookItems("Dracula", false)
    ];
  }
}

export class BookItems {
  description;
  action;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
