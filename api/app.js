require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5001
const todoRouter = require("./src/routers/todoRouters")
const connect = require("./src/config/databaseConnection")

app.use(express.json())
app.use(cors())
app.use("/api", todoRouter)

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    connect()
    console.log(`Server listening on port : ${port}`);
})