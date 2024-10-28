const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/findSum", (req, res) => {
  let n1 = parseInt(req.query.n1);
  let n2 = parseInt(req.query.n2);
  if (isNaN(n1) || isNaN(n2)) {
    res.status(400).send("Both query parameters n1 and n2 must be numbers.");
  } else {
    res.send(`Sum is ${n1 + n2}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
