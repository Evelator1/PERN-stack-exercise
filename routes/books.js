const express = require("express");
const booksRouter = express.Router();
const { getBooks, createBook, deleteBook } = require("../controllers/books");

booksRouter.get("/", getBooks);

booksRouter.post("/", createBook);

booksRouter.delete("/:id", deleteBook);

module.exports = booksRouter;
