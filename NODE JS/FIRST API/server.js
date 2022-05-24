const express = require("express");
const server = express();
const bodyParser = require("body-parser");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
  {
    id: "O76niS",
    name: "Onions",
  },
  {
    id: "45gfh",
    name: "Eggs",
  },
  {
    id: "dk412",
    name: "Boil Eggs",
  },
  {
    id: "90sjk",
    name: "fish",
  },
];

// server.get('/', function(req, res){
//   res.send("This is the First API!");
// });

// server.get('/funions', function(req, res){
//   res.send("Yoo! Here are my Funions!");
// });

server.get("/", function (req, res) {
  res.send(ingredients);
});

server.post("/", function (req, res) {
  var ingredient = req.body;
  if (!ingredient || ingredient.name === "") {
    res.status(500).send({ error: "Ingredient must have a Name!" });
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredient);
  }
});

const portNumber = 3000;
server.listen(portNumber, function () {
  console.log(`Server is running at Port: ${portNumber}`);
});
