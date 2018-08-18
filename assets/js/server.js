// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [];




// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
   
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  // Displays all tables
  app.get("/api/patrons", function(req, res) {
    return res.json(tables);
  });
  
  // Displays a single table, or returns false
  app.get("/api/tables/:patron", function(req, res) {
    var chosen = req.params.table;
  
    console.log(chosen);
  
    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].routeName) {
        return res.json(patrons[i]);
      }
    }
  
    return res.json(false);
  });