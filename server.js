// server.js
import express from "express";

const app = express();

app.get("/api/people", (req, res) => {
  res.json([
    { id: 1, name: "Ignacio", role: "Student" },
    { id: 2, name: "María", role: "Teacher" }
  ]);
});

app.listen(5000, () => {
  console.log("API running on http://localhost:5000");
});
