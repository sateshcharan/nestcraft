import { configDotenv } from "dotenv";
import express from "express";
configDotenv();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
