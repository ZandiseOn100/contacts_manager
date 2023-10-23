const express = require("express");
const app = express();
const path = require("path");
const port = 2044;
const dotenv = require("dotenv");

//middleware
app.use(express.urlencoded({ extended: true }));
//setup ejs as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// displaying css files
app.use(express.static(path.join(__dirname, "public")));
// Load environment variables from .env file
dotenv.config();

//Import and use controllers
const indexController = require("./controllers/indexController");
app.use("/", indexController);
const displayController = require("./controllers/displayController");
app.use("/", displayController);

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
});