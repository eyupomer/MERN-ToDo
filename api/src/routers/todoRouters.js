const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")

router.post('/todo', todoController.addTodo)
router.get('/todo', todoController.getAllTodos)
router.put('/todo/:id', todoController.updateTodo)
router.delete('/todo/:id', todoController.deleteTodo)

module.exports = router