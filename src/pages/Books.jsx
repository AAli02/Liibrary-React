import { useState } from "react";
import Book from "../components/ui/Book";

function Books({ books: initialBooks }) {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks(filter) {
    console.log(filter);
    if (filter === "LOW_TO_HIGH") {
      setBooks(books.slice().sort ((a, b) => 
      (a.salePrice || a.originalPrice) - 
      (b.salePrice || b.originalPrice)))
    }
    if (filter === "HIGH_TO_LOW") {
      setBooks(books.slice().sort ((a, b) => 
      (b.salePrice || b.originalPrice) - 
      (a.salePrice || a.originalPrice)))
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Low to High</option>
                  <option value="HIGH_TO_LOW">High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;