const express = require("express");
const app = express();
app.use(express.static('public'))
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/favico.ico', (req, res) => {
  res.sendFile(__dirname + "/public/index.html/favico.ico");
});