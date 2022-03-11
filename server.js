const express=require('express')
const app=express()

function logger(req,res,next){
  console.log("recieved a request");
  next()
}

function userLogger(req,res,next){
  console.log("user route requested")
  next()
}

app.use(logger)
app.get("/api",function(req,res){
  res.send('hello there')
})
app.get("/api/user",userLogger, function(req,res){
  res.send(' User')
})



app.listen(8000)