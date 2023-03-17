const jwt=require('jsonwebtoken')
const config =require('config')


module.exports=(req,res,nxt)=>{
   let token=req.header('x-auth-token')
   if(!token)
   return res.status(401).send('Access Denied....')
   try{
 const deco= jwt.verify(token,config.get('jwtsec'))
 if(!deco.adminrole)
 return res.status(401).send('Access Denied....')
 nxt()
}
   catch(err){
console.log(err);
   }
}