const express = require("express");
const app = express();

const router = require("./routes/router");
app.use("/api", router);

const host = "http://localhost";
const port = 5000;
app.listen(port, ()=>{
    console.log(`I am listening on ${host}:${port}`);
});