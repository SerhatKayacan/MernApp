const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ToDoSchema = new Schema({
  title: { type: String },
  done: { type: Boolean, default: false }
});

module.exports = ToDo = mongoose.model("toDo", ToDoSchema);
