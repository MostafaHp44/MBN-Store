const express= require('express')
const routess =express.Router()
const cotroler=require('../Controler/controler')
const middelwareuser= require('../MiddelWare/middelwareuservalid')
const middelwareadmin=require('../MiddelWare/middelwareadminvalid')
const passport=require('passport')



routess.post('/signup', middelwareuser , cotroler.CreateUser)


routess.post('/login',
  passport.authenticate('local', {
    successRedirect:'/adminpanel',
    successMessage:true,
     failureRedirect: '/login',
     failureMessage: true 
    }),
  function(req, res) {
    res.redirect('/~' + req.user.username);
  });

module.exports=routess