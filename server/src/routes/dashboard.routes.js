const express = require("express");
const router = express.Router();
const {
  addSensorData,
  getAllSensorData,
  getSingleSensorData,
} = require("../controllers/sensor.controller.js");


router.route("/dashboard").post(addSensorData);
router.route("/dashboard").get(getAllSensorData);
router.route("/dashboard/:id").get(getSingleSensorData);

module.exports = router;

