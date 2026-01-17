import React, { useEffect, useState } from "react";
import { getLogs, exportCSV } from "../services/api";

export default function LogTable() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs().then(res => setLogs(res.data.logs));
  }, []);

  return (
    <>
      <button onClick={exportCSV}>Export CSV</button>
      <table border="1">
        <thead>
          <tr>
            <th>User</th>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(l => (
            <tr key={l._id}>
              <td>{l.user}</td>
              <td>{l.method}</td>
              <td>{l.endpoint}</td>
              <td>{l.statusCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
