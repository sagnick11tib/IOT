const mongoose = require("mongoose");

const DB_URL = process.env.DB + "iot";

async function connectionDB(){
    try {
        const mongooseInstance = await mongoose.connect(DB_URL);
        console.log(`MongoDB connected !! DB HOST :${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error in connection to DB : ${error.message} \n ${error} \n ${error.stack}`);
    }
}

module.exports = connectionDB;