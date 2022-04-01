const express = require("express");
const app = express();
const users = [
  {
    id: "1",
    username: "john",
    password: "John0908",
    isAdmin: true,
  },
  {
    id: "2",
    username: "jane",
    password: "Jane0908",
    isAdmin: false,
  },
];

app.post("/api/login", (req, res) => {
  res.json(users);
});
app.listen(3000, () => console.log("backend server is running"));
