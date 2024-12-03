import express from "express";
import cors from "cors";  // Import cors
import Connection from "./utilis/db.js"; // Assuming this is the MySQL connection object
import { adminRouter } from "./Routes/AdminRoute.js";


const app = express();

// Apply CORS middleware
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware to parse JSON body
app.use(express.json());

// Use the adminRouter for routes under "/auth"
app.use("/auth", adminRouter);

// Logging middleware (Request logger)
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
