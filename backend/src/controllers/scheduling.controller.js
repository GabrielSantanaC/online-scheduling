const SchedulingModel = require("../models/scheduling.model");

class Scheduling {
  async index(req, res) {
    const schedules = await SchedulingModel.find();

    res.send({ schedules });
  }

  async store(req, res) {
    const body = req.body;

    const scheduling = await SchedulingModel.create(body);

    res.send({ scheduling });
  }

  async getOne(req, res) {
    const { id } = req.params;

    try {
      const scheduling = await SchedulingModel.findById(id);
      if (!scheduling) {
        return res.send({ message: "Not found" });
      }
      res.send({ scheduling });
    } catch (error) {
      res.status(400).json({ message: "An unexpected error happened" });
    }
  }

  async remove(req, res) {
    const { id } = req.params;
    try {
      const scheduling = await SchedulingModel.findById(id);
      if (!scheduling) {
        return res.send({ message: "Scheduling not exist" });
      }
      await scheduling.remove();
      res.send({ message: "Scheduling removed" });
    } catch (error) {
      res.status(400).json({ message: "Scheduling not found" });
    }
  }

  async update(req, res) {
    const {
      body,
      params: { id },
    } = req;

    try {
      const scheduling = await SchedulingModel.findByIdAndUpdate(id, body, {
        new: true,
      });

      res.send({ message: scheduling });
    } catch (error) {
      res.status(404).send({ message: "An unexpected error happened" });
    }
  }
}

module.exports = new Scheduling();
