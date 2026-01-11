const express = require("express");
const app = express();

// route
app.get("/", (req, res) => {
  res.sendFile("hello.html", { root: __dirname });
});

// ✅ YAHAN DAALNA HAI (LAST)
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
