const express = require("express");
const router = express.Router();
const {
  addSensorData,
  getAllSensorData,
  getSingleSensorData,
} = require("../controllers/sensor.controller.js");


router.route("/").post(addSensorData);
router.route("/").get(getAllSensorData);
router.route("/:id").get(getSingleSensorData);

module.exports = router;

