const mongoose = require("mongoose");

//connection to the database
const connectDB = async()=>{
  try{
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Database connected successfully\nHost: ${connect.connection.host}\nDatabase: ${connect.connection.name}`);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;

