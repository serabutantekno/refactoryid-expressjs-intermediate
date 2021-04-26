const express = require("express")
const TodoController = require("./src/controllers/todoController")


const app = express()
const port = 3000


app.use(express.json())


app.get("/todos/", TodoController.get)
app.get("/todos/:id", TodoController.getById)
app.post("/todos/", TodoController.create)
app.put("/todos/:id", TodoController.update)


app.listen(port, () => {
    console.log(`Listening at localhost:${port}`)
})
