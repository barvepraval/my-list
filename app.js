const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");
const app = express();
var items=["buy food", "cook food", "eat food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {

  // res.send("hello");

  var today = new Date();
  var options = {
    weekDay : "long",
    day: "numeric",
    month: "long"
    }

  var day = today.toLocaleDateString("en-US", options);


  // switch (currentday) {
  //   case 0:
  //     day = "sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 3:
  //     day = "Tuesday";
  //     break;
  //   case 4:
  //     day = "Wednesday";
  //     break;
  //   case 5:
  //     day = "Thursday";
  //     break;
  //   case 6:
  //     day = "Friday";
  //     break;
  //   case 7:
  //     day = "Saterday";
  //     break;
  //   default:
  //     console.log("Error : currentday is equal to the value of currentday");
  // }

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

});

app.post("/", function(req, res){

var item= req.body.newItem;
items.push(item);
res.redirect("/");
});

app.listen(3000, function() {

  console.log("server is running on port 3000");

})
