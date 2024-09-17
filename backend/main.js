import { exec } from "child_process";
import { configDotenv } from "dotenv";
import express from "express";
configDotenv();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  exec("python scripts/main.py", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    res.send(stdout);
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
