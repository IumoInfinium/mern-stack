import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;
const app = express();
app.use(cors);

await mongoose
  .connect(
    "mongodb+srv://harshit:harshit@cluster0.3w1rx5w.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB connection is successful");
  })
  .catch((error) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(PORT, () => {
  console.log("server is running at http://localhost:4000");
});
