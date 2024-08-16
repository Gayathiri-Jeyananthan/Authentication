const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ('dotenv').config();

//connect mongodb
mongoose.connect(process.env.MONGO_URI,{
useNewUrlParser:true,
useUnifiedTopology:true,
}).then(()=> console.log('MongoDB is connected Gayu')).catch((err)=> console.log(err));

app.use(express.json());

app.use('/auth', require('../server/routes/user'))

const PORT= process.env.PORT || 5000

app.listen (PORT,()=>console.log('Server listening on port Gayu'));