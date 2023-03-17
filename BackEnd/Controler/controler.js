const userschema = require('../Models/users.js')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const config =require('config')
const passport=require('passport')
const localstrategy= require('passport-local').Strategy


const CreateUser=async(req,res)=>{
    const data = req.body;
   
    try{

    // if user rigster befor on not 
    let mailuser = await userschema.findOne({email:data.email}).exec()
    let usernameuser = await userschema.findOne({username:data.username}).exec()
    
    if(mailuser)
    return res.status(400).send('this mail rigster before')

    if(usernameuser)
    return res.status(400).send('so,sorry But The username is taken ')

    if(mailuser&&usernameuser)
    return res.status(400).send('the mail and username is already rigsterd ')



    // Create New User
    let salt = await bcrypt.genSalt(10)
    let hashpass= await bcrypt.hash(data.password,salt)

    const newuser= new userschema({
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        password:hashpass,
        username:data.username,
        isadmin:false

    });
      await newuser.save();
      if(!config.get("jwtsec")) 
      return res.status(500).send('fullfiled')
  
      const token=newuser.getauthtoken();
      res.header('xauthtoken',token)
      res.status(200).send('ok man')


}
catch (err){
    console.log(err);
}
    

   
 

}

const AuthUser=async(req,res)=>{
    try{
    const data = req.body;
    let mailuser = await userschema.findOne({
        username:data.username
    }).exec()
    if(!mailuser)
    return res.status(400).send('invalid username or email')

    let pass=await bcrypt.compare(data.password,mailuser.password)
    if(!pass)
    return res.status(400).send('invalid password')
    if(mailuser.isadmin)
    return res.send('admin').redirect('/adminpanel')
    
    if(!mailuser.isadmin)
    return res.send('notadmin').redirect('/userpanel')


    if(!config.get("jwtsec")) 
    return res.status(500).send('fullfiled')

    const token=mailuser.getauthtoken();
    
    res.header('xauthtoken',token)
    res.status(200).send('login Sucessfully')
}

catch(err)
{
    console.log(err);

}




}
module.exports= {CreateUser,AuthUser}