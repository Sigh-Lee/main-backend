# routes/superadmin.js
(base_path / "routes/superadmin.js").write_text("""
const express = require("express");
const router = express.Router();
const { getAllMentors, approveMentor, deleteMentor } = require("../controllers/superadminController");

router.get("/mentors", getAllMentors);
router.put("/approve/:id", approveMentor);
router.delete("/delete/:id", deleteMentor);

module.exports = router;
""")