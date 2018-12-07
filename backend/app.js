import express from "express";
import http from "http";
import bodyParser from "body-parser";
import { config } from "./config";

const app = express();
const server = http.createServer(app);
const port = config.port || 5000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`localhost:${config.port}`);
});
