const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./models/connectDB");

const router = require("./routes/router");
connectDB();
app.use("/api", router);

const host = "http://localhost";
const port = process.env.port;
app.listen(port, ()=>{
    console.log(`I am listening on ${host}:${port}`);
});