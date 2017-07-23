var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/aw-selections",function(req,res){
  res.sendFile(path + "aw-selections.html");
});

router.get("/members",function(req,res){
  res.sendFile(path + "members.html");
});

router.get("/bgs",function(req,res){
  res.sendFile(path + "bgs.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
