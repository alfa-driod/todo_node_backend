require('dotenv').config();
const express= require('express');
const app= express();
const mongoose=require('mongoose');
const todoController=require('./controllers/todoController');
const PORT=process.env.PORT || 3000;
app.use(express.json());
app.get('/todos',todoController.getallTodo);
app.get('/todos/:id',todoController.getTodoById);
app.get('/todo',todoController.getTodoByName);
app.post('/todos',todoController.addTodo);
app.delete('/todos/:id',todoController.deleteTodoById);
app.patch('/todos/:id',todoController.updateTodoById);


app.listen(PORT, function () {
    console.log('server has started to run');
    mongoose.connect(process.env.LOCAL_URL)
    .then(function(){
        console.log('DB is connected');
    })
    .catch(function (error) {
        console.log('DB s not connected',error.message);
    })
})
//mongodb://localhost/todo_db