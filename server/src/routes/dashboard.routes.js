const express = require("express");
const router = express.Router();

router.route("/dashboard").get(getDashboard);
router.route("/dashboard/:id").get(getDashboardById);
router.route("/dashboard").post(createDashboard);
