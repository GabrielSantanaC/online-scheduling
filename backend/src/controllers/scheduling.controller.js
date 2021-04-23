const SchedulingModel = require("../models/scheduling.model");

class Scheduling {
  async index(request, response) {
    const schedules = await SchedulingModel.find();

    response.send({ schedules });
  }

  async store(request, response) {
    const body = request.body;

    const scheduling = await SchedulingModel.create(body);

    response.send({ scheduling });
  }
}

module.exports = new Scheduling();
