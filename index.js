const express = require("express")
const TodoController = require("./src/controllers/todoController")


const app = express()
const port = 3000


app.get("/todos/", TodoController.get)
app.get("/todos/:id", TodoController.getById)


app.listen(port, () => {
    console.log(`Listening at localhost:${port}`)
})
