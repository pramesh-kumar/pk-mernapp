const express= require('express')
const app= express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const cookieParser = require('cookie-parser')
app.use(cookieParser())

// connecting DATABASE

// Securing password
dotenv.config({path:'./config.env'}); 
// after this anywhere you can use process.env  ......

const port = 8000 || process.env.PORT;

require('./db/conn')

app.use(express.json())

const route = require('./router/auth');
app.use(route)


// Middleware

// function Middleware(req, res, next) {
//     console.log("Hello My Middleware");
//     next();
// }



// app.get("/about",Middleware,(req,res)=>{
//     res.send("About Me")
// })

// app.get("/contact",(req,res)=>{
//     // res.cookie("cookieTest","pramesh");
//     res.send("Contact Me")
// })


app.get("/login",(req,res)=>{
    res.send("Login  Page")
})


app.get("/signup",(req,res)=>{
    res.send("SignUp   Page")
})

//On Heroku
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
    const path = require("path")
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

app.listen(port,()=>{
    console.log(`Server is running at port no. ${port}`)
})

  