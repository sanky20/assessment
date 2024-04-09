const mongoose = require("mongoose");

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/tasksDB");
// const db = mongoose.connection;

const connnectDB=  async ()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected : ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

module.exports= connnectDB;



