const express = require("express");
const server = express();
const bodyParser = require("body-parser");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// server.get("/", function (req, res) {
//   res.send("This is the First API!");
// });

// server.get("/funions", function (req, res) {
//   res.send("Yoo, Here are my Funions!");
// });

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
    name: "Frogs Legs",
  },
];

server.get("/ingredients", function (req, res) {
  res.send(ingredients);
});

server.post("/ingredients", function (req, res) {
  var ingredient = req.body;
  if (!ingredient || ingredient.name === "") {
    res.status(500).send({ error: "Ingredient must have a Name!" });
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
  }
});

server.put("/ingredients/:ingredientId", function (req, res) {
  var newName = req.body.name;
  if (!newName || newName === "") {
    res.status(500).send({ error: "Please provide a name to the Ingredient!" });
  } else {
    var ingredientFound = false;
    for (var i = 0; i < ingredients.length; i++) {
      var ing = ingredients[i];
      if (ing.id === req.params.ingredientId) {
        ing.name = newName;
        ingredientFound = true;
        break;
      }
    }

    if (!ingredientFound) {
      res.status(500).send({ error: "Ingredient not Found!" });
    } else {
      res.send(ingredients);
    }
  }
});

const portNumber = 3000;

server.listen(portNumber, function () {
  console.log(`Server is running at Port: ${portNumber}`);
});
