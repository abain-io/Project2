/*********************************************************************************/
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// 
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the contactss
  app.get("/api/contacts", function(req, res) {
    var query = {};
    if (req.query.id) {
      query.AuthorId = req.query.id;
    }
    db.contacts.findAll({
      // where: query
    }).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });

  // Get route for retrieving a single contacts
  app.get("/api/contacts/:id", function(req, res) {
    db.contacts.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbContacts) {
      console.log(dbContacts);
      res.json(dbContacts);
    });
  });

  // contacts route for saving a new contact
  // next line was app.contacts - should be app.get or post????
  app.post("/api/contacts", function(req, res) {
    db.contacts.create(req.body).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });

  // DELETE route for deleting contactss
  app.delete("/api/contacts/:id", function(req, res) {
    db.contacts.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });

  // PUT route for updating contacts
  app.put("/api/contacts", function(req, res) {
    db.contacts.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });
};
