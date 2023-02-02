import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
dotenv.config();
// CONFIG
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v1/post", postRoutes);

app.get("/", (req, res) => {
  res.send("The server is live");
});
// CONNECTION TO DB FUNCTIO
const connect = async () => {
  try {
    mongoose.set({ strictQuery: false });
    await mongoose
      .connect(process.env.MONGO)
      .then(console.log("Connected to Mongo database manager."));
  } catch (error) {
    console.log(error.message);
  }
};
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Listenning on port ${PORT} `);
    connect();
  });
};

startServer();
// MIDDLEWARES
