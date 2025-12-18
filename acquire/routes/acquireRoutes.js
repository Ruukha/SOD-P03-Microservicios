const express = require("express");
const router = express.Router();

const acquireController = require("../controllers/acquireController");

router.get("/health", acquireController.health);
router.post("/acquire", acquireController.acquire);

module.exports = router;
