const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const SchedulingRouter = require('./routes/scheduling.route')

const {MONGO_URL, HTTP_PORT} = process.env

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json())

app.use('/api', SchedulingRouter)

app.listen(HTTP_PORT, () => {
  console.log(`Rodando na porta ${HTTP_PORT}`);
});
