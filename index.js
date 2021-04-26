const express = require("express")
const TodoController = require("./src/controllers/todoController")


const app = express()
const port = 3000


app.get("/todos/", TodoController.get)


app.listen(port, () => {
    console.log(`Listening at localhost:${port}`)
})


/**
 * Testing MySQL database connection.
 */
const { Sequelize } = require("sequelize")
const db = require("./src/config/database")
const sequelize = new Sequelize(db.development)
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
