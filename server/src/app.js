const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors({credentials:true,origin:process.env.CORS_ORIGIN}));

const dashboardRouter = require("./routes/dashboard.routes.js");
const reportRouter = require("./routes/dailyReport.routes.js");
const remainderRouter = require("./routes/remainder.routes.js");

app.use("/api/v1/dashboard",dashboardRouter);
app.use("/api/v1/report",reportRouter);
app.use("/api/v1/remainder",remainderRouter);


module.exports = app;
