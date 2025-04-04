require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Load MongoDB URI from .env
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MongoDB URI is missing in .env!");
  process.exit(1);
}

// ✅ Connect to MongoDB using Node.js Driver
let db;
MongoClient.connect(MONGO_URI)

  .then(client => {
    console.log("✅ Connected to MongoDB");
    db = client.db(); // Set the database
  })
  .catch(error => console.error("❌ MongoDB Connection Error:", error));

// ✅ API to Get Profiles
app.get("/profiles", async (req, res) => {
  try {
    const profiles = await db.collection("profiles").find().toArray();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profiles", error });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
