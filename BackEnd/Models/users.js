const mongoose=require('mongoose')
const validd= require('validator')
const jwt=require('jsonwebtoken')
const config =require('config')



const userschema=mongoose.Schema({

    firstname:{
        type:String,
        required:true,
        minlength:5,
        maxlength:30,
    },
    lastname:{
        type:String,
        required:true,
        minlength:5,
        maxlength:30,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:(val)=>{
                return validd.isEmail(val)
            }, 
            massage:`{value} is not valid`
        }
    
    },
    username:{
        type:String,
        required:true,
        minlength:5,
        maxlength:30,
    },
   
    password:{
        type:String,
        required:true,
         minlength:5,
    },
    isadmin:{
        type:Boolean,
    }

});
userschema.method('getauthtoken',function(){
    const token=jwt.sign({
        userdid:this._id,
        fname:this.firstname,
        lname:this.lastname,
        adminrole:this.isadmin,

    }
        ,config.get("jwtsec"))
    return token

})

module.exports=mongoose.model('Users',userschema)
