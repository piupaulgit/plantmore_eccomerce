const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const {
  addToWishList,
  getAllWishListItems,
  deleteItemsFromWishList,
} = require("../controllers/wishList");
const router = express.Router();

router.param("userId", getUserById);

router.post("/add/:userId", isSignedIn, addToWishList);
router.get("/all/:userId", isSignedIn, getAllWishListItems);
router.delete("/delete/:userId", isSignedIn, deleteItemsFromWishList);

module.exports = router;
