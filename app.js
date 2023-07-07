//jshint esversion:6


const express = require("express");
const bodyParser =require("body-parser");

const app = express();
app.use(express.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi =weight/Math.pow(height,2);
  res.send("your BMI is: "+bmi);
});
app.listen(3000,function(){
  console.log("server with port 3000 started for calculator website");
});
