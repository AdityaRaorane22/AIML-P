const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve a text file when user visits /exp3, /exp4, etc.
app.get("/:expId", (req, res) => {
  const expId = req.params.expId; // e.g. "exp3"
  const filePath = path.join(__dirname, "texts", `${expId}.txt`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found.");
    }
    res.type("text/plain").send(data);
  });
});

// Home route
app.get("/", (req, res) => {
  res.send("Welcome! Try /exp3 or /exp4 in the URL.");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
