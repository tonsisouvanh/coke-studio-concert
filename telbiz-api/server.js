import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
// import corsOptions from "./config/corOrigins.js";
import cookieParser from "cookie-parser";

// import errorHandler from "./middleware/errorHandler.js";
// import { logEvents, logger } from "./middleware/logger.js";
import axios from "axios";
import Telbiz from "telbiz";

// Initialize environment variables
dotenv.config();

// Create Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "public")));

const tb = new Telbiz(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

// Test seding whatsapp message
app.post("/send_sms", async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  let msg = `Here is your OTP: ${otp}`;
  tb.SendSMSAsync(tb.SMSHeader.News, phone, msg)
    .then((rs) => {
      res.json(rs);
      // res.json({ status: "success", data: { phone, message: msg } });
    })
    .catch((err) => {
      res.json(err);
    });
  res.json({ status: "success", data: { phone, message: msg } });
});

// Handle 404 errors
// app.all("*", (req, res) => {
//   res.status(404);
//   if (req.accepts("html")) {
//     res.sendFile(path.join(__dirname, "views", "404.html"));
//   } else if (req.accepts("json")) {
//     res.json({ message: "404 Not Found" });
//   } else {
//     res.type("txt").send("404 Not Found");
//   }
// });

// Start the server once connected to MongoDB
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
