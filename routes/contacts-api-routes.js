/*********************************************************************************/
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// 
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the contactss
  app.get("/contacts", function(req, res) {
    db.Contacts.findAll({}).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });

  app.post("/api/new", function(req, res) {
    console.log("New Contact:");
    console.log(req.body);
    Contacts.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      phone_number: req.body.phoneNumber
    });
  });


  
};
