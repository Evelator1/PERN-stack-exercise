require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const booksRouter = require("./routes/books");

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
