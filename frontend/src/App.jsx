import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import BookDetails from "./components/BookDetails.jsx";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<BookList books={books} />} />
        <Route path="/bookdetails" element={<BookDetails />} />
      </Routes>
      {/* <Form /> */}
    </>
  );

  function BookList({ books }) {
    const navigate = useNavigate();
    const showBookDetails = () => {
      navigate("/bookdetails");
    };
    return (
      <>
        {books.map((book) => (
          <div key={book.id}>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
            {/* <p>Description: {book.description}</p>
          <p>Category: {book.category}</p>
          <img src={book.cover_url} alt="Book Cover" />
          <br /> */}
            <button onClick={showBookDetails}>Show more</button>
          </div>
        ))}
      </>
    );
  }
}

export default App;
