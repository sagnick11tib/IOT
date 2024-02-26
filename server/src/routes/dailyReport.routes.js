const express = require("express");
const router = express.Router();
const {
    dailyWhatsappReportSendOnNotification,
    waterLevelNotification
} = require("../controllers/dailyReport.controller.js");

router.route("/daily-report").post(dailyWhatsappReportSendOnNotification);
router.route("/water-level").post(waterLevelNotification);


module.exports = router;

