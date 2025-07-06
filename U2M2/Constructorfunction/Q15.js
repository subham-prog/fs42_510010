
function Book(title, author) {
  return {
    title: title,
    author: author,
    details: function () {
      console.log(`Title: "${this.title}", Author: ${this.author}`);
    }
  };
}

function createLibrary() {
  const books = [];

  return {
    addBook: function (book) {
      books.push(book);
      console.log(`Added book: "${book.title}"`);
    },

    removeBook: function (title) {
      const index = books.findIndex(book => book.title === title);
      if (index !== -1) {
        const removedBook = books.splice(index, 1)[0];
        console.log(`Removed book: "${removedBook.title}"`);
      } else {
        console.log(`Book titled "${title}" not found.`);
      }
    },

    listBooks: function () {
      if (books.length === 0) {
        console.log("No books available in the library.");
        return;
      }
      console.log("Listing all books:");
      books.forEach(book => book.details());
    }
  };
}

const library = createLibrary();

const book1 = Book("1984", "George Orwell");
const book2 = Book("To Kill a Mockingbird", "Harper Lee");
const book3 = Book("The Great Gatsby", "F. Scott Fitzgerald");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();

library.removeBook("1984");

library.listBooks();