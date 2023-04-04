const express= require('express')
const routess =express.Router()
const cotroler=require('../Controler/controler')
const middelwareuser= require('../MiddelWare/middelwareuservalid')
const middelwareadmin=require('../MiddelWare/middelwareadminvalid')
const passport=require('passport')



routess.post('/signup', middelwareuser , cotroler.CreateUser)


routess.post('/login',middelwareadmin,cotroler.AuthUser);

module.exports=routess