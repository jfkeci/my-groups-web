import serveStatic from "serve-static";
import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
