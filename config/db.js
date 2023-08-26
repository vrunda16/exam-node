const mongoose = require('mongoose')
const Connected=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("mongod connected");
}
module.exports=Connected


