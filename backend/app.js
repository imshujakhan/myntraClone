const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Myntra Clone API - Use /items endpoint" });
});

app.get("/items", (req, res) => {
  const data = JSON.parse(fs.readFileSync('items.json', 'utf-8'));
  res.json({ items: data.items });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
