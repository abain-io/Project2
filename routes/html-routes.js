// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/authentication");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/mainmenu");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/mainmenu");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/mainmenu", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainmenu.html"));
  });

  // contacts route loads cms.html
  app.get("/contacts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/testcontacts.html"));
  });

  //  companies route loads companies.html
  app.get("/companies", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/companies.html"));
  });

};
