const express = require('express')
const app = express();
const router = express.Router()
const bcrypt = require('bcryptjs')
const authenticate = require('../middleware/authenticate') 

router.get('/',(req,res)=>{
    res.send("Home from router .js ");
})

require("../db/conn")
const User = require("../model/userSchema")


// // By promises ...

// router.post('/register',(req,res)=>{
//     // console.log(req.body)
//     // console.log(req.body.name)
//     //Object Destructuring 
//     const {name,email,phone,work,password,cpassword} = req.body;

//     if( !name || !email || !phone || !work || !password || !cpassword){
//          return res.status(422).json({error:"Plz fill all Details"})
//     }
//     // console.log(name)

//     User.findOne({email: email}).
//     then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"This email already exist "})
//         }

//         const user = new User({name,email,phone,work,password,cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"})
//         }).catch((err)=>{
//             res.status(500).json({error:"Failed to register !"})
//         })

//     }).catch(err=>{console.log(err)})

    

//     // res.json({message:req.body})
//     // res.json(req.body)

// })


// By async  ...
router.post('/register',async(req,res)=>{

    try{
        const {name,email,phone,work,password,cpassword} = req.body;
    
        if( !name || !email || !phone || !work || !password || !cpassword){
             return res.status(422).json({error:"Plz fill all Details"})
        }

        const userExist = await User.findOne({email: email});
        
        if(userExist){
            return res.status(422).json({error:"This email already exist. "})
        }
        else if(password != cpassword){
            return res.status(422).json({error:"Password didn't match. "})
        }
        else{
            const user = new User({name,email,phone,work,password,cpassword});
            // PASSWORD AUTHENTICATION USE HERE BEFORE SAVE
            await user.save();
            
            res.status(201).json({message:"user registered successfully"})
        }
        
    }catch(err){
        console.log(err)
    }

})

// login route  

router.post("/signin",async(req,res)=>{
    
    try{
        const {email,password}= req.body;
        if(!email || !password){
            return res.status(400).json({error:"Plz enter details properly"})
        }
        const userLogin = await User.findOne({email:email});
        console.log(userLogin)
        
        if(userLogin){ 
            const isMatched =await bcrypt.compare(password,userLogin.password);
            const token = await userLogin.generateAuthToken();
            // console.log(token)

            // saving tokens into cookies

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly: true
            }) 
        

            if(isMatched){
                res.status(201).json({message:"User signed successfully ."})
            }else{
                res.status(400).json({error:"Invalid Credentials ..."})
                
            }
        }else{
            res.status(400).json({error:"User not found !"})
        }
    }catch(err){
        console.log(err)
    }
})


// About Page 

router.get("/about",authenticate,(req,res)=>{
    console.log("About Me Page")
    res.send(req.rootUser)
})


// Get user Data for Home and Contact page 

router.get("/getdata",authenticate,(req,res)=>{
    console.log("Home and Contact page ")
    res.send(req.rootUser)
})

// Contact us Page 
router.post("/contact",authenticate,async(req,res)=>{
    try {
        
       const {name,email,phone,message} =req.body;

       if(!name || !email || !phone || !message){
        console.log("Error in Conact form ")
        return res.json({error:"Plzz fill the conact Form"});
       }

       const userContact =await User.findOne({_id:req.userID})

       if(userContact){
        const userMessage = await userContact.addMessage(name,email,phone,message);

        await userContact.save();

        res.status(201).json({message:"User Contact Successfully"})
       }

    } catch (err) {
        console.log(err)
    }
    
})

// Logout Page 

router.get("/logout",(req,res)=>{
    console.log("About my logout Page")
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('User Logout')
})


module.exports= router
