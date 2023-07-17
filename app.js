const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');//Here we give instruction to our program to use ejs 

app.get("/", function(req, res){
    
    var today = new Date();

//belwo code was using for to pass the day to todolist file .Now we will use the javascript function for this.

    //var currentDay = today.getDay();
    //var day = "";
    //if (currentDay === 6 || currentDay === 0){
       //day = "Weekend";
    //}else if (currentDay === 1){
        //day = "Monday";
    //}else if (currentDay === 2){
        //day = "Tuesday";
    //}else if (currentDay === 3){
        //day = "Wednesday";
    //}else if (currentDay === 4){
        //day = "Thursday";
    //}else{
        //day = "Friday";
    //} 

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
var day = today.toLocaleDateString("en-US", options);

    res.render("todolist", {kindOfDay: day});//used to render a view and sends the rendered HTML string to the client.
    //todolist is the file name under view folder. kindOfDay is in todolist file.
  });
  
  app.listen(3004, function(){
    console.log("Server started on port 3004.");
  });
  