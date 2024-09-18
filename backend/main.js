import { exec } from "child_process";
import { configDotenv } from "dotenv";
import multer from "multer";
import { DxfParser } from "dxf-parser";
import express from "express";
import fs from "fs";

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

app.post("/data", (req, res) => {
  console.log(req);
});

app.post("/convert-dxf", (req, res) => {
  const file = req.file;
  res.send(file);

  // fs.readFile(file.path, "utf-8", (err, data) => {
  //   if (err) {
  //     return res.status(500).send("Error reading file");
  //   }

  //   try {
  //     const dxf = DxfParser.parseSync(data);
  //     // Convert DXF to SVG (you need to implement the conversion logic)
  //     const svg = convertDxfToSvg(dxf);
  //     res.json({ svg });
  //   } catch (parseError) {
  //     res.status(400).send("Error parsing DXF file");
  //   }
  // });
});

function convertDxfToSvg(dxf) {
  // Placeholder function: implement the logic to convert parsed DXF to SVG
  return "<svg>...</svg>";
}

app.listen(port, () => console.log(`Server started on port ${port}`));
