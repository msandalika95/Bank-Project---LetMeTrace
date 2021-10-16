const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;
 app.use(cors());
 app.use(express.json());

 const URL = process.env.MONGODB_URL;
 mongoose.connect(URL, {
     useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
 });

 const connection = mongoose.connection;
 connection.once("open", () => {
     console.log("Mongo DB connection success!");
 })

 const bankRouter = require("./routes/bank.js");
 app.use("/bank", bankRouter);

 app.listen(PORT, () => {
     console.log(`server is running on port ${PORT}`)
 })