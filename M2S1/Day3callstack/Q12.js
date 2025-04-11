const library = {
    books: [
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],
  
    addBook(book) {
      const { title, author, year } = book;
      if (!title || !author || !year || typeof year !== "number") {
        console.log("Book information is incomplete or invalid.");
        return false;
      }
  
      this.books.push(book);
      console.log(`Book "${title}" added successfully.`);
      return true;
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
  
      if (index !== -1) {
        const removed = this.books.splice(index, 1)[0];
        console.log(`Removed: "${removed.title}"`);
        return true;
      } else {
        console.log("Book not found.");
        return false;
      }
    }
  };

  library.addBook({ author: "George Orwell", year: 1949 });
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  
  console.log("Books in library:", library.books.length);
  