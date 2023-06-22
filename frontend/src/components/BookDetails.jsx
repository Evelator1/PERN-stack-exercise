import { useState, useEffect } from "react";
import axios from "axios";

function BookDetails() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <h2>Title: {book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          <p>Category: {book.category}</p>
          <img src={book.cover_url} alt="Book Cover" />
          <br />
          {/* <button>Show more</button> */}
        </div>
      ))}
    </>
  );
}

export default BookDetails;
