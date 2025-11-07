import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/:expId", (req, res) => {
  const expId = req.params.expId;
  const filePath = path.join(__dirname, "texts", `${expId}.txt`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(404).send("File not found.");
    res.type("text/plain").send(data);
  });
});

app.get("/", (req, res) => {
  res.send("Welcome! Try /exp3 or /exp4.");
});

export default app;
