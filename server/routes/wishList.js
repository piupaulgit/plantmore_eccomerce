const express = require("express");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);

// router.post("/add/:userId", isSignedIn, addToCart);

module.exports = router;
