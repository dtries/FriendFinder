// express npm 

var express = require("express");
var path = require("path");

// -----configure express -------------
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port used for webpages
var PORT = process.env.PORT || 8080;

// configure express for JSON rendering
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ----Routes for used with program -----
// ================================================================================

// require("./routes/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener, displays port that server is using

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
