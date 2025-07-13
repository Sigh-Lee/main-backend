# routes/mentor.js
(base_path / "routes/mentor.js").write_text("""
const express = require("express");
const router = express.Router();
const { registerMentor, loginMentor, createLicense } = require("../controllers/mentorController");

router.post("/register", registerMentor);
router.post("/login", loginMentor);
router.post("/create-license", createLicense);

module.exports = router;
""")