const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const app = express();
const port = process.env.port || 8000;
var todos = [];
const mustacheExpress = require("mustache-express");
var completed = [];


app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./public");

//Middleware\\
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

//Routes\\

app.get("/", function(req, res) {   
    res.render('index', { todos: todos, completed: completed });
  
});

app.post("/", function (req, res) {
     checkBox = req.body.checkBox;
     console.log(checkBox)
    if(checkBox){
        for (var i=todos.length-1; i>=0; i--){
            if (todos[i] === checkBox) {
                completed.push(checkBox);
                todos.splice(i, 1);
                res.redirect('/');}}
            }
                // res.render('/', {todos: todos, completed: completed});}
            else {  
                todos.push(req.body.listItem);
                res.redirect('/');
            }
  
    })



         
            
             

  


 


app.listen(8000, function() {
  console.log("Successfully started express application!");
});