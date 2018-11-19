// Dependencies
//npm packages
// =============================================================
const express = require("express");

var PORT = process.env.PORT || 8080;

// Sets up the Express App
// =============================================================
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use (express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give access to server 
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start server and begin listening to client requests
app.listen(PORT, function() {
    //log (server-dide) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

