var db = require('../models');
module.exports = { 
	create:function(req, res){
		db.User
		.create(req.body)
		.then(function(dbUser){
			console.log('dbUser',dbUser);
			res.json(dbUser)

		})

	},

	read:function(req, res){
		console.log("Inside Read")

		db.User
		.find({},function(err, dbUser){
      if(!err){
       res.json(dbUser) 
      }
      else{throw err;}
    })
	}





	// update:function(req, res){
	// 	console.log("Inside Update")

	// 	db.User
	// 	.update(req.body)
	// 	.then(function(dbUser){
	// 		res.json(dbUser)

 //  }
	// },

	// delete:function(req, res){
	// 	console.log("Inside Delete")

	// 	db.User
	// 	.empty(req.body)
		

	// }

 }

// var model = require('../models')
// var User = model.User;
// var bcrypt = require('bcrypt-nodejs')
// var mongojs = require('mongojs');
// var isValid = function(password, realpassword) {
//   return bcrypt.compareSync(password, realpassword);
// }

// module.exports = {
//   createUser(req, res) {
//     return User
//     .create(req.body)
//     .then(user => {
//       res.status(201).send({
//         message: "user created",
//         userName: userProfile.username,
//         status: "successful"
//         })
//     })
//     .catch(error => {
//       console.log(error, "an error occured")
//     })
//   },

//   getAllUser(req, res) {
//     return User
//     .all()
//     .then(users => {
//       res.status(200).send(users)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   },

//   login(req, res) {
//     return User
//     .findOne({
//       where: {
//         username: req.body.username
    
//       }
//     }).then(user => {
//       if(user && isValid(req.body.password, user.password)) {
//         res.status(200).send({
//           message: "successfully logged in"
//         })
//       }
//         else{
//         return res.status(404).send({
//           message: "invalid login"
//         }) }
//     })
    
//   },

//   updateUser(req, res) {
//     return User
//     .findById(req.params.id)
//     .then(user => {
//       if (user) {
//         return user
//         .update(req.body)
//         .then(() => {
//           res.status(200).send(user)
//         })
//       }
//       else {
//         return res.status(404).send({
//           message: "user not found"
//         })
//       }
//     })
//   },
//   deleteUser(req, res){
//     return User
//     .findById(req.params.id)
//     .then(user => {
//       if (user) {
//         return user
//         .destroy()
//         .then(()=> {
//           res.status(200).send({
//             message: "user deleted"
//           })
//         })
//       }else {
//         res.status(404).send({
//           message: "user not found"
//         })
//       }
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
// }

