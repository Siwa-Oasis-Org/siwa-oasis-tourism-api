import "dotenv/config";
import express from "express";
import bootstrap from "./app.controller.js";
import { connectDB } from "./DB/connection.js";

const app = express();
const port = process.env.PORT || 3000;

// Connect to DB then start server
connectDB().then(() => {
  bootstrap(app, express);
  app.listen(port, () =>
    console.log(`🚀 Siwa Oasis server running on port ${port}`)
  );
});
