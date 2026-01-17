const express = require("express");
const router = express.Router();
const { getLogs, exportLogs } = require("../controllers/logController");

router.get("/", getLogs);
router.get("/export", exportLogs);

module.exports = router;
