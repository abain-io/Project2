var express = require("express");
var bodyParser = require("body-parser");

//setup express app
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

//Setup Express app to handle data parsing

//parse aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//parse application/jsondata
app.use(bodyParser.json());

//static directory to be served
app.use(express.static("public"));

//Routes
//=============================
require("./routes/api-routes.js")(app);

//HTML routes
require("./routes/html-routes.js")(app);

//Start the server to bigin to listen
//==========================================
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});