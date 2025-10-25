const mongoose = require('mongoose');


const conn = async () => {
    try{
        await mongoose.connect("mongodb+srv://rb_yadav18:rajeev18@myproject1.ko0lo.mongodb.net/").then(()=>{
        console.log("Database connected",mongoose.connection.name);
    })
    }catch(error){
        console.log("Error while connecting to database", error);
    }
}
conn();

// mongodb+srv://my-todo-app:Rajeev@cluster0-todo.hounpri.mongodb.net/