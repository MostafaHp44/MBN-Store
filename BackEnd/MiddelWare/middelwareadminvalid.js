const adminvalid =require('../Validator/validatoradmin')

module.exports=(req,res,nxt)=>{
    
    let adminvalidator=adminvalid(req.body)

    if (adminvalidator){
        req.adminvalidator=1
        nxt();
    }
    else{
        res.status(403).send('for bidden command')
    }
}