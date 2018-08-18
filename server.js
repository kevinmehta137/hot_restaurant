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
app.get("/home", function(req, res) {
   
    res.sendFile(path.join(__dirname, "home.html"));
  });
app.get("/make", function(req, res) {
   
    res.sendFile(path.join(__dirname, "make.html"));
  });
  
app.get("/view", function(req, res) {
   
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  // Displays all tables
  app.get("/.form-group", function(req, res) {
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

  // Create table - takes in JSON input
app.post("/.form-group", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newtable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newtable);

  tables.push(newtable);

  res.json(newtable);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

