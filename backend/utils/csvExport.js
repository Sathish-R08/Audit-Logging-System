const { createObjectCsvWriter } = require("csv-writer");

module.exports = async (logs, path) => {
  const writer = createObjectCsvWriter({
    path,
    header: [
      { id: "user", title: "USER" },
      { id: "method", title: "METHOD" },
      { id: "endpoint", title: "ENDPOINT" },
      { id: "statusCode", title: "STATUS" },
      { id: "timestamp", title: "TIME" },
    ],
  });

  await writer.writeRecords(logs);
};
