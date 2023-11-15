import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import path from "path";
import connectDB from "./Config/db.js";
import user from "./Routes/User.js";

const app = express();

connectDB();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", user);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", " build", "index.html"));
});
//PORT
const PORT = process.env.PORT || 6000;

app.listen(PORT, async (req, res) => {
  console.log(`server is running at ${PORT}`);
});
