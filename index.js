const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3001;

let notes = ["note 1", "note 2"];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
