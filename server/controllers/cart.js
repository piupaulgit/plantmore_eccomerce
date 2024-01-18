const Cart = require("../models/cart");

exports.addToCart = async (req, res) => {
  try {
    const product = await Cart.create(req.body.cart);
    res.json({
      status: "success",
      data: product,
      message: "Product added into your cart",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllCartProducts = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("product", "name");
    res.json({
      status: "success",
      data: cartItems,
    });
  } catch (err) {}
};
