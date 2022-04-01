const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "testdb",
});

connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/test", (req, res) => {
  res.json({ message: "I am a message from Server!" });
});

app.get("/api/news", (req, res) => {
  var sql = "SELECT * FROM orders ORDER BY id DESC";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ news: results });
  });
});

app.post("/api/insert", function (req, res) {
  console.log(req.body);
  console.log("uhuu");
  const order = req.body;
  var sql =
    "INSERT " +
    "INTO orders(title,description,content) " +
    "VALUES('" +
    order.title +
    "','" +
    order.description +
    "','" +
    order.content +
    "')";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    return res.json({ news: results });
  });
});

app.post("/api/edit", (req, res) => {
  var sql =
    "UPDATE orders SET " +
    "title='" +
    req.body.title +
    "'," +
    "description='" +
    req.body.description +
    "'," +
    "content='" +
    req.body.content +
    "'" +
    "WHERE id='" +
    req.body.id +
    "'";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ news: results });
  });
});

app.post("/api/delete", (req, res) => {
  var sql = "DELETE FROM orders " + "WHERE id='" + req.body.id + "'";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ news: results });
  });
});

app.listen(4000, () => console.log("App listening on port 4000"));
