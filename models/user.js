var mongoose = require('mongoose');


// creating a schema for User (for application)
var userSchema = mongoos.Schema({

 firstName:{
        type:String,
        trim:true,
        requireed:'first name is required'
        },
        
    lastName:{
        type:String,
        trim:true,
        requireed:'first name is required'   
        },
        
    userName:{
        type:String,
        trim:true,
        required:'user name is required',
        },
        
    email:{
        type:String,
        unique:true,
        match:[/.+\@..+/], 'Please enter a vaild email address'
        },
        
    password:{
        type:string,
        trim:true,
        required: 'password is required'
        validaton:function CheckPassword(inputtxt){   
			
			var passw=  /^[A-Za-z]\w{7,14}$/;  
				if(inputtxt.value.match(passw)){   
					   alert('Correct, try another...')  
				return true;  
				}  
				else  
				{   
				alert('Wrong...!')  
				return false;  
				}  
			}	
		},
       
    occuptation:{
        type: String,
        trim:true
        },
        
        
     hobbies:{
         type:Array,
         trim:true
     }, 
     
      charities:{
          type:Array,
          trim:true
         
     }, 

     religious preference:{

     	type:String,
     	trim:true
     }

     willing to relocate:{
     	type:32-bit integer
     	trim:true
     },

     list of 10 must haves:{
     	type:array,
     	trim:true

     },
     
      
      video:{
           type:String,
           trim:true,
           required:true
          },

     picture:{
          type:String,
          trim:true,
          required:true
          },

      create_date:{

      	type: Date,
      	default:Date.now
      }
          
});

var User = mongoose.model('User', "userSchema");
module.exports = User;
