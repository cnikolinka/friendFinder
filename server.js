//Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.//

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 7979;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, () => console.log("listening on port %s", port));