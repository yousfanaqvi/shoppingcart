const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function (_, res) {
  res.sendFile( path.join(__dirname, '../build/index.html'),
);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running on port ${port}`));
 
module.exports = app;

