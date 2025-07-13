# server.js - Main backend entry file
(base_path / "server.js").write_text("""
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const superAdminRoutes = require("./routes/superadmin");
app.use("/api/superadmin", superAdminRoutes);
const mentorRoutes = require("./routes/mentor");
const clientRoutes = require("./routes/client");

app.use("/api/superadmin", superAdminRoutes);
app.use("/api/mentor", mentorRoutes);
app.use("/api/client", clientRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ RMC X-PERT Backend running on port ${PORT}`));
""")
