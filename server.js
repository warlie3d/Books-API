// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const booksController = require("/.controllers/books_controller");

//config/middleware

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

//mongoose
mongoose
  .connect("mongodb://localhost:27017/your_database_name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      "Connected to MongoDB on: mongodb://localhost:27017/your_database_name"
    );
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//root index
app.get("/", (req, res) => {
  res.send("Hello World");
});

//books
app.use("/books", booksController);

//listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
