// --- Obtaining data by linking to data source arrays
var path = require('path');

var friendsData = require("../data/friends.js");

// Routing informations

module.exports = function (app) {

  // --- API GET Requests for friendsArray data JSON ----

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // --- API POST Requests ---takes user input, submits JSON to friendsArray ---
  // --- Calculates closest match and Displays that match -----

  app.post("/api/friends", function (req, res) {

    // req.body via the body parsing middleware already included in required npm modules
    // gathers survey responses from user
    var surveyInput = req.body;

    var clientScores = surveyInput.scores; //obtains scores for survey answers

    // set up vars for matching process
    var compatibleName = ""; //empty at start
    var compatibleImage = ""; //empty at start
    var matchScore = 1024; //large diff at beginning of match process

    //Loop through all persons in friendsArray and compare scores
    for (var i = 0; i < friendsData.length; i++) {
      var scoreDiff = 0;

      for (var d = 0; d < clientScores.length; d++) {
        scoreDiff += Math.abs(friendsData[i].scores[i] - clientScores[d]); //calculates absoulte diff between each answer for those in the friends array and the current user
      }

      if (scoreDiff < matchScore) {
        matchScore = scoreDiff; // sets matchScore to scoreDiff only when the current comparison has a lower score than the existed low score

        compatibleName = friendsData[i].name; // sets name to person with lowest absolute diff score
        compatibleImage = friendsData[i].photo; //set image to person with lowest absoulte diff score
      }

    }

    //Insert current users survey info into the friends array
    friendsData.push(surveyInput);

    // response
    res.json({
      status: "OK",
      compatibleName: compatibleName,
      compatibleImage: compatibleImage
    });

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    tableData.length = [];
    waitListData.length = [];

    res.json({
      ok: true
    });
  });
};