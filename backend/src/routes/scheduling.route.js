const express = require("express");
const SchedulingController = require("../controllers/scheduling.controller");

const Routes = express.Router();

Routes.get("/scheduling/:id", SchedulingController.getOne);
Routes.delete("/scheduling/:id", SchedulingController.remove);
Routes.put("/scheduling/:id", SchedulingController.update);
Routes.get("/scheduling", SchedulingController.index);
Routes.post("/scheduling", SchedulingController.store);

module.exports = Routes;
