var express = require("express");
var app = express ();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routes = require("./routes")

// setup port  and database connection

var PORT = process.env.PORT || 3000;


 // setup express to handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));
app.use(routes)

app.get('/', function(req, res){
	res.send('Veronica, you are making progress. I am proud of you.')

});

// require("./routes/api_routes")(app);
// TODO: ADD HTML.JS
// require(".routes/html_routes")(app);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/heartlink";
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});


app.listen(PORT,function(){
console.log("App listening on Port" + PORT);
});
