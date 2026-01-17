const AuditLog = require("../models/AuditLog");
const exportCSV = require("../utils/csvExport");
const path = require("path");

exports.getLogs = async (req, res) => {
  const { user, endpoint, page = 1, limit = 10 } = req.query;

  const filter = {};
  if (user) filter.user = user;
  if (endpoint) filter.endpoint = endpoint;

  const logs = await AuditLog.find(filter)
    .sort({ timestamp: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await AuditLog.countDocuments(filter);

  res.json({ logs, total });
};

exports.exportLogs = async (req, res) => {
  const logs = await AuditLog.find().lean();
  const file = path.join(__dirname, "../logs.csv");

  await exportCSV(logs, file);
  res.download(file);
};
