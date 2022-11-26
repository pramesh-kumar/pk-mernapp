const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const e = require('express');

const mySchema = new  mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true
    },
    phone:{
        type : Number,
        required: true
    },
    work:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
    cpassword:{
        type : String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type : String,
                required: true
            },
            email:{
                type : String,
                required: true
            },
            phone:{
                type : Number,
                required: true
            },
            message:{
                type : String,
                required: true
            }
        }
    ],
    tokens:[
    {
        token:{
            type : String,
            required: true
        }
    }
    ]
})

// we are hasing password 

mySchema.pre('save',async function(next){
    
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12); // 12 round hashed
        this.cpassword=await bcrypt.hash(this.cpassword,12); // 12 round hashed
    }
    next();
})

// we are generating a token ..

mySchema.methods.generateAuthToken = async function(){
    try{
        const myToken =  jwt.sign({_id:this._id},process.env.SECRET_KEY)
        // adding token 
        this.tokens=this.tokens.concat({token : myToken});
        await this.save();
        return myToken;

    }catch(err){
        console.log(err);
    }
}

// Store the Message 

mySchema.methods.addMessage = async function(name,email,phone,message){
    try {
        this.messages = this.messages.concat({name,email,phone,message})
        await this.save()
        return this.messages;
        
    } catch (err) {
        console.log(err)
    }
}


// collection creation 
const User = new mongoose.model('USER',mySchema);
module.exports= User



