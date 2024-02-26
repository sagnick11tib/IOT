const express = require("express");
const router = express.Router();
const {
    getAllRemainderWhatsapp,
    addRemainderWhatsapp,
    deleteRemainder
} = require("../controllers/remainderWhatsapp.controller.js");

router.route("/").get(getAllRemainderWhatsapp);
router.route("/").post(addRemainderWhatsapp);
router.route("/:id").delete(deleteRemainder);

module.exports = router;