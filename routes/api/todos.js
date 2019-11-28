const express = require("express");
const router = express.Router();

//Todo Model
const Todo = require("../../models/ToDo");

// @route GET api/todos
//get all todos
router.get("/", (req, res) => {
  Todo.find().then(todos => res.json(todos));
});

// @route POST api/todos
//create a todo
router.post("/", (req, res) => {
  const newToDo = new Todo({
    title: req.body.title
  });
  newToDo.save().then(todo => res.json(todo)); //kaydet, kaydedileni json olarak dön
});

// @route DELETE api/todos/:id
//delete a todo
router.delete("/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//PUT api/todos/:id
//update a todo
router.put("/:id", (req, res, next) => {
  Todo.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Todo.findOne({ _id: req.params.id }).then(todo => {
        res.send(todo);
      });
    })
    .catch(next);
});

module.exports = router;
