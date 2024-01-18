const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { addToCart, getAllCartProducts } = require("../controllers/cart");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);

router.post("/add/:userId", isSignedIn, addToCart);
router.get("/all/:userId", isSignedIn, getAllCartProducts);

module.exports = router;
