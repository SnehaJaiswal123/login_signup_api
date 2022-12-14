const express=require('express');
const app=express();
const userRouter=require('./api/route/user')
const bodyParser=require('body-parser')

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://SnehaJaiswal:mongo123@cluster0.kel6pqw.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('error',err=>{
    console.log("connection failed")
})
mongoose.connection.on('connected',connected=>{
    console.log("connected successfully");
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use('/student',studentRouter);
app.use('/user',userRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        message:"bad url"
    })
})
module.exports=app;