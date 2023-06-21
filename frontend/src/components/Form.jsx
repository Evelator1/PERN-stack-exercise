import { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";

function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    // console.log(title, author);

    axios
      .post("http://localhost:3001/books", {
        title,
        author,
        description,
        category,
        coverUrl,
        publishedDate,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="form" onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="author"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Cover Picture (URL)"
        onChange={(e) => {
          setCoverUrl(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Publishing Date"
        onChange={(e) => {
          setPublishedDate(e.target.value);
        }}
      />
      <br />

      <input type="submit" />
    </form>
  );
}
export default Form;
