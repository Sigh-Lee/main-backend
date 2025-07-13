# routes/superadmin.js
const express = require("express");
const router = express.Router();
const { getAllMentors } = require("../controllers/superadminController");

router.get("/mentors", getAllMentors);

module.exports = router;


router.get("/mentors", getAllMentors);
router.put("/approve/:id", approveMentor);
router.delete("/delete/:id", deleteMentor);

module.exports = router;
""")
