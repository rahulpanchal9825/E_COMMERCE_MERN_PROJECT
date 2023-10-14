const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require('./Routes/Routes');

const app = express();

dotenv.config({path:'./config/config.env'})
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URL);


//routes
app.use('/api',Routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});

