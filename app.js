const express = require("express");

const app = express();

app.use(express.static("public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});

// Alternative database form data collection.
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
//
// const app =express();
//
// app.use(bodyParser.urlencoded({extended: true}));
//
// mongoose.connect("mongodb+srv://admin-sam:test123@cluster0.gk8tj.mongodb.net/PortfolioDB");
//
// const hiremeSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   companyname:String,
//   subject: String,
//   message: String
// });
// const Hireme = mongoose.model("Hireme", hiremeSchema);
//
// app.post("index.html", function(req, res){
//   const hireme = new hireme({
//     name: req.body.name,
//     email: req.body.email,
//     companyname: req.body.companyname,
//     subject: req.body.subject,
//     message: req.body.message
//   });
//   hireme.save();
// });
