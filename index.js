const express = require("express");
const cors = require("cors");
const connected = require("./config/db");
const expressn = require("./routes/user.routes");


const app = express();
app.use(express.json());

app.listen=(8070,()=>{
    console.log("connected with mongoodb ");
    connected()
});