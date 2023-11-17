export class LibraryModel {
  library;
  bookItems;

  constructor() {
    this.library = "İstanbul Ataturk";
    this.bookItems = [
      new BookItems("Sefiller", true),
      new BookItems("Otomatik Portakal", false),
      new BookItems("Beyaz İnci", false)
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
