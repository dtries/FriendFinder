// require path npm package to set file paths for the html
var path = require("path");

// --- Routing information ------

module.exports = function(app) {
  // --- HTML GET Requests, default is homepage ---

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};