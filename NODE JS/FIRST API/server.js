const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("This is the First API!");
});

app.get("/funions", function (req, res) {
  res.send("Yoo! Here are the funions foo!");
});

app.listen(3000, function () {
  console.log("Server is running at Port: 3000");
});
