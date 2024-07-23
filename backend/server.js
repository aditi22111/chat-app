const express = require("express");
const dotenv = require("dotenv");
const {chats}= require("./data/data");
const connectDB = require("./db/connection");
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");
const app= express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data


app.get('/',(req,res)=>{
    res.send("api is running");

})

app.use('/api/user', userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT= process.env.PORT || 5000;
app.listen(PORT, console.log("Server started"));
