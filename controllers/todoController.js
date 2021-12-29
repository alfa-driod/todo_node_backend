const Todo= require('../models/todo');
 async function addTodo(req,res) {
    try {
       const newTodo= await Todo.create(req.body);
       res.status(200).json(newTodo);
       
    } catch (error) {
        console.log('cant add data:',error.message);
        res.status(401).json({
            message:'cant add data',error:error.message
        })
    }
} 
 async function deleteTodoById(req,res){
try {
    const todo=await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'Deleted'});
} catch (error) {
    res.status(400).json({message:'Not Deleted'})
}
}
 async function getTodoByName(req,res){
try {
    const todo=await Todo.find({title:/host/}).where('isCompleted').equals(false);
    res.status(200).json(todo);
} catch (error) {
    res.status(400).json({error:error.message})
}
}
 async function getTodoById(req,res){
try {
    const todo=await Todo.findById(req.params.id);
    res.status(200).json(todo)
} catch (error) {
    
}
}
async function updateTodoById(req,res){
    const todoid=req.params.id;
    const body=req.body;
try {
     await Todo.findByIdAndUpdate(todoid,body);
    res.status(200).json({message:'your app is updated'});
} catch (error) {
    res.status(401).json({error:error.message})
}
}
 async function getallTodo(req,res){
try {
    const todo=await Todo.find({});
    res.status(201).json(todo);
} catch (error) {
    res.status(401).json({message:'cant get all data',error:error.message})
}

}
module.exports={
    getTodoById,addTodo,deleteTodoById,updateTodoById,getallTodo,getTodoByName

}