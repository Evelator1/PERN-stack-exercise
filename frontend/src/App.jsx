import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form.jsx";

function App() {
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
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <p>Category: {book.category}</p>
            {/* <p>{book.cover_url}</p>
            <p>{book.publishedAt}</p> */}
          </div>
        );
      })}
      <Form />
    </>
  );
}

export default App;
