const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var date = Date();
var tasklist=[];
// GET Requests
app.get("/",function(req,res){
  res.render("list",{date:date,tasklist:tasklist})
})


app.post("/",function(req,res){
  var task = req.body.Task;
  tasklist.push(task);
  res.render("list",{date:date,tasklist:tasklist})

})


app.listen("3000",function(){
  console.log("Server stared at port 3000");
})
