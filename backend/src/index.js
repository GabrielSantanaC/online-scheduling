const express = require("express");
const mongoose = require("mongoose");

const SchedulingController = require("./controllers/scheduling.controller");

mongoose.connect("url", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json())

app.get("/scheduling", (request, response) =>
  SchedulingController.index(request, response)
);

app.post("/scheduling", (request, response) =>
  SchedulingController.store(request, response)
);

app.listen(3333, () => {
  console.log("Rodando na porta 3333");
});
