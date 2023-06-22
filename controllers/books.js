const pool = require("../db");

const getBooks = async (req, res) => {
  try {
    const { limit, skip } = req.query;
    let query = "SELECT * FROM books";

    // It would be better to use "parametized queries", to prevent SQL injection attacks. Like so:"

    //      const values = [];

    //     if (limit !== undefined && skip !== undefined) {
    //       query = "SELECT * FROM books LIMIT $1 OFFSET $2";
    //       values.push(limit, skip);
    //     }

    //     const { rows } = await pool.query(query, values);
    //     res.json(rows);
    //   } catch (error) {
    //     console.log(error.message);
    //     res.status(500).send("Something went wrong");
    //   }
    // };

    if (limit !== undefined && skip !== undefined) {
      query = `SELECT * FROM books LIMIT ${limit} OFFSET ${skip}`;
    }

    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something went wrong");
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, description, category, cover_url, publishedAt } =
      req.body;
    const { rows } = await pool.query(
      "INSERT INTO books (title, author, description, category, cover_url, publishedAt) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
      [title, author, description, category, cover_url, publishedAt]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM books WHERE id=$1;", [id]);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
  }
};

module.exports = { getBooks, createBook, deleteBook };
