import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/db.js";
import Routers from "./routes/routers.js";
dotenv.config();

//declaration
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align:center">Home page</h1><h4 style="text-align:center"><i>go to</i></h4><h2 style="text-align:center">http://localhost:${PORT}/api/products</h2>`
  );
});

app.use("/api/products", Routers);

// STARTING SERVER
app.listen(PORT, () => {
  ConnectDB();
  console.log(`Sever is running on http://localhost:${PORT}`);
});
