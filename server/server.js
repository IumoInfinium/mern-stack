import express from "express";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import TransactionsApi from "./routes/TransactionApi.js";
import connected from "./database/monogdb.js"

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello server");
});

app.use('/transaction',TransactionsApi);

await connected();

app.listen(PORT, () => {
  console.log("server is running at http://localhost:4000");
});
