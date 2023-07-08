const todo = require("../models/todoModel")

const getAllTodos = async (req,res) => {
    try {
        const allTodos = await todo.find({})
        return res.status(200).json({
            success: true,
            data: allTodos
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong :" + error
        })
    }
}

const addTodo = async (req, res) => {
    try {
        const _todo = await todo.findOne({ name: req.body.name })
        if (_todo) {
            return res.status(400).json({
                success: false,
                message: "There is a todo with same name!"
            })
        }
        const todoAdd = new todo(req.body)
        await todoAdd.save().then(() => {
            return res.status(200).json(todoAdd)
        }).catch(err => {
            return res.status(400).json({
                success: false,
                message: "Something went wrong :" + err
            })
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong :" + error
        })
    }
}

const updateTodo = async (req, res) => {
    const {id} = req.params
    try {
        const updateTodo = await todo.findByIdAndUpdate(id, req.body)
        if (updateTodo) {
            return res.status(200).json({
                success: true,
                message: "Todo updated successfully :)"
            })
        } else return res.status(400).json({success: false, message: "Something went wrong!"})
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong :" +error
        })
    }
}

const deleteTodo = async (req, res) => {
    const {id} = req.params
    try {
        const deleteTodo = await todo.findByIdAndDelete(id)
        if (deleteTodo) {
            return res.status(200).json({
                success: true,
                message: "Todo deleted successfully :)"
            })
        } else return res.status(400).json({success: false, message: "Something went wrong"})
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong :" + error
        })
    }
}

module.exports = {
    addTodo,
    getAllTodos,
    deleteTodo,
    updateTodo
}