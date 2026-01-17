const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
  user: { type: String, index: true },
  method: String,
  endpoint: { type: String, index: true },
  statusCode: Number,
  ip: String,
  userAgent: String,
  timestamp: { type: Date, default: Date.now, index: true },
});

auditLogSchema.index({ user: 1, timestamp: -1 });

module.exports = mongoose.model("AuditLog", auditLogSchema);
