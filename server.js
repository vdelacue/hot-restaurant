// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (DATA)
// =============================================================
var reservations = [
  {
    routeName: "111",
    table: 1,
    customer_name: "John Smith",
    phone_number: "123-456-7890",
    email: "john.smith@gmail.com",
    customer_id: 111
  },
  {
    routeName: "222",
    table: 2,
    customer_name: "John Smith",
    phone_number: "123-456-7890",
    email: "john.smith@gmail.com",
    customer_id: "222"
  },
  {
    routeName: "333",
    table: 3,
    customer_name: "John Smith",
    phone_number: "123-456-7890",
    email: "john.smith@gmail.com",
    customer_id: "333"
  },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/tables/:custID", function(req, res) {
  let chosen  = req.params.custID;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newRes = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newRes.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRes);

  characters.push(newRes);

  res.json(newRes);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
