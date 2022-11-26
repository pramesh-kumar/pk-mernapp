const mongoose =   require('mongoose')

const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
    console.log("Connection  is Successfull")
}).catch((e)=>{
    console.log("No connection ")
    console.log(e)
    
})