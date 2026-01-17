const AuditLog = require("../models/AuditLog");

const auditLogger = (req, res, next) => {
  res.on("finish", async () => {
    try {
      await AuditLog.create({
        user: req.headers["x-user"] || "anonymous",
        method: req.method,
        endpoint: req.originalUrl,
        statusCode: res.statusCode,
        ip: req.ip,
        userAgent: req.headers["user-agent"],
      });
    } catch (err) {
      console.error("Audit log error:", err.message);
    }
  });

  next();
};

module.exports = auditLogger;
