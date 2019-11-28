const express = require("express");
const mongoose = require("mongoose"); //interract with database
const bodyParser = require("body-parser"); //take requests and get data from body

const todos = require("./routes/api/todos");

const app = express(); //initialize express

//bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI; // database connect key'ini aldı

//connect to mongo
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("mongodb connected")) // bağlandığında
  .catch(err => console.log(err)); // bağlanamzsa

//use routes
app.use("/api/todos", todos); // todos route file ( /api/todos'a gelen istekte çalışır)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
