const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const port = 3000;
const number = require("./lib/number");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ hello: "Hello World!" });
});

app.use("/api", number.router);

if (!module.parent) {
  app.listen(port, () => {
    console.log("Node app is running on port", port);
  });
}

module.exports = app;
