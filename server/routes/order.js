const express = require("express");
const { isAuthenticated, isSignedIn, isAdmin } = require("../controllers/auth");
const { addOrder, getAllOrders } = require("../controllers/order");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);

router.post("/add/:userId", isSignedIn, isAuthenticated, addOrder);
router.get("/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders);

module.exports = router;