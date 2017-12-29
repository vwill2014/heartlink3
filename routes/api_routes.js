var path = require("path");
var userController = require("../controllers/userControllers.js");
var router = require("express").Router();


module.exports = function(){


router.get('/user', userController.read);



// app.post('/', function(req, res){
	


// });

// app.update('/', function(req, res){
	


// });

// app.delete('/', function(req, res){
	


// });

}

// setting up routes

