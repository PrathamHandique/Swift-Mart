const mongoose = require('mongoose');
require('colors');

//connectDb function

const connectDb = async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected: ${conn.connection.host}`.bgYellow);

    }catch(error){
        console.log(`Error:${error.message}`.red.bold);
        process.exit(1);
    }
};

module.exports=connectDb;