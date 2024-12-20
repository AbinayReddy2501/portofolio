// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname));

// MongoDB Atlas connection
const MONGO_URI = "mongodb+srv://abinayreddy:Reddy22@abinayportfolio.g4m2k.mongodb.net/portfolioDB?retryWrites=true&w=majority";
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Routes
app.use("/api/messages", chatRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
