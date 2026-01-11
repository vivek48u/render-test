import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello.html",{root:__filename});
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
