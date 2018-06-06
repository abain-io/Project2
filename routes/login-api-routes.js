// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our  model
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app){

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/mainmenu");
    });

    app.post("/api/login", function(req, res) {
        console.log(req.body);
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword
        }).then(function() {
          res.redirect(307, "/api/mainmenu");
        }).catch(function(err) {
          console.log(err);
          res.json(err);
          // res.status(422).json(err.errors[0].message);
        });
      });
      app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
      });

      app.get("/api/user_data", function(req, res) {
        if (!req.user) {
          // The user is not logged in, send back an empty object
          res.json({});
        }
        else {
          // Otherwise send back the user's email and id
          // Sending back a password, even a hashed password, isn't a good idea
          res.json({
            email: req.user.email,
            id: req.user.id
          });
        }
      });
    
    };
 