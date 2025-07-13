# routes/client.js
(base_path / "routes/client.js").write_text("""
const express = require("express");
const router = express.Router();
const { validateLicense, getTradeHistory } = require("../controllers/clientController");

router.post("/validate", validateLicense);
router.get("/history/:licenseKey", getTradeHistory);

module.exports = router;
""")