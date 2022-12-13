import mongoose from "mongoose";

async function connect(){
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
}
export default connect;