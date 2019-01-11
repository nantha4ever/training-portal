var express = require("express");
var app = express();
app.use(express.static('views'));
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/login",function(req,res){
  res.sendFile(path + "login.html");
});

router.get("/dashboard",function(req,res){
  res.sendFile(path + "dashboard.html");
});

router.get("/history",function(req,res){
  res.sendFile(path + "training-history.html");
});

router.get("/trainings-conducted-by-me",function(req,res){
  res.sendFile(path + "trainings-conducted-by-me.html");
});

router.get("/update-skills",function(req,res){
  res.sendFile(path + "update-skills.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});