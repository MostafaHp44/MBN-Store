const localstrategy= require('passport-local').Strategy
const userschema =require('../Models/users')
 
const PassportAuthUser =  passport => {
    passport.use(new localstrategy({},async(username,password,done)=>{
        try{
          const user= await userschema.findOne({'username':username})
                if(user) return done(null,false,{massage:'User Not Found'})
                const pass= await userschema.findOne({'password':password})
                if(pass.password!==password) return done(null,false,{massage:"Wrong Password"})
                return done(null,user)
           
        }
        catch(err)
        {
            console.log(err)
            return done(err, false);
            
        }
      
    }))
    passport.serializeUser((mailuser,done)=>{done(null,mailuser._id)})
    passport.deserializeUser((id,done)=>{done(null,userschema.findById('id',id))})
    }

module.exports = PassportAuthUser

