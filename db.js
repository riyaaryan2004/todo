const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://riyaaryan2004:E7xBHNkJaTiN9h3R@cluster0.yhgy7ho.mongodb.net/todos");
const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.export={
    todo
}