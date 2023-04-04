const express =require ('express')
const dotenv= require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const routes=require('./Routes/routes')
const passport=require('passport')
const session=require('express-session')
require('./passport/passportauth')(passport)


 
app.use(cors({
   
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
   secret:"qwertyuiop",
   resave:false,
   saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())
 
app.use('/',routes)


 dotenv.config({
    path:'./config.env'
 })


 mongoose.set('useCreateIndex', true)
 mongoose.connect(process.env.MYURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log('DataBase is connect.... ')}).catch((err)=>{console.log(err)})





app.listen(5000,()=>{console.log('Server is running now ....!!!')})



