var db = require("../models");

module.exports = function(app) {
    app.get("api/companies", function(req, res){
        db.Company.findAll({}).then(function(dbCompany){
            res.json(dbCompany)
        });
    });

    app.get("/api/companies/:id", function(req, res){
        db.Company.findOne({
            where: {
                id:req.params.id
            }
        }).then(function(dbCompany){
            res.json(dbCompany);
        });
    });

    app.post("/api/companies", function(req, res){
        db.Company.create(req.body).then(function(dbCompany){
            res.json(dbCompany);
        });
    });

    app.delete("/api/companies/:id", function(req, res){
        db.Company.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCompany){
                res.json(dbCompany);
            
        });
    });
};