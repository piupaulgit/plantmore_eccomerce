const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const {
  addToCart,
  getAllCartProducts,
  deleteItemsFromCart,
  reduceItemsFromCart,
} = require("../controllers/cart");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);

router.post("/add/:userId", isSignedIn, addToCart);
router.get("/all/:userId", isSignedIn, getAllCartProducts);
router.delete("/reduce/:userId", isSignedIn, reduceItemsFromCart);
router.delete("/delete/:userId", isSignedIn, deleteItemsFromCart);

module.exports = router;
