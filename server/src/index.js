require("dotenv").config({path: "../.env"});

const connectDB = require("./config/connection.js");

const app = require("./app.js");

connectDB().then(()=>{
    const PORT = process.env.PORT || 6000;
    app.listen(PORT,()=>{
        console.log(`Server is connected on PORT ${PORT}`);
    });
}).catch((error)=>{
    console.log(`Error in connecting to Database ${error}`);
});







    