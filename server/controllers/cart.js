const Cart = require("../models/cart");
const mongoose = require("mongoose");

exports.addToCart = async (req, res) => {
  const userId = req.params.userId;
  try {
    const { product } = req.body.cart;
    const existingCartItem = await Cart.findOne({ product, userId });

    if (existingCartItem) {
      existingCartItem.count += 1;
      const updatedCartItem = await existingCartItem.save();

      res.json({
        status: "success",
        data: updatedCartItem,
        message: "Product count updated in your cart",
      });
    } else {
      const savedCartItem = await Cart.create({
        userId: userId,
        product: req.body.cart.product,
      });

      res.json({
        status: "success",
        data: savedCartItem,
        message: "Product added to your cart",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
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

exports.changeItemCountInCart = async (req, res) => {
  const { product } = req.body;
  const existingCartItem = await Cart.findOne({ product });

  if (req.body.actionType === "reduce") {
    if (existingCartItem) {
      if (existingCartItem.count === 1) {
        const deletedProduct = await existingCartItem.deleteOne();
        res.json({
          status: "success",
          data: deletedProduct,
          message: "Product deleted from your cart",
        });
      } else {
        existingCartItem.count -= 1;
        const updatedCartItem = await existingCartItem.save();
        res.json({
          status: "success",
          data: updatedCartItem,
          message: "Product count reduced",
        });
      }
    }
  } else if (req.body.actionType === "increase") {
    const { product } = req.body;
    const existingCartItem = await Cart.findOne({ product });

    if (existingCartItem) {
      existingCartItem.count += 1;
      const updatedCartItem = await existingCartItem.save();
      res.json({
        status: "success",
        data: updatedCartItem,
        message: "Product count increase",
      });
    }
  }
};

exports.deleteItemsFromCart = async (req, res) => {
  const { product } = req.body;
  const existingCartItem = await Cart.findOne({ product });

  if (existingCartItem) {
    const deletedProduct = await existingCartItem.deleteOne();
    res.json({
      status: "success",
      data: deletedProduct,
      message: "Product deleted from your cart",
    });
  } else {
    res.json({
      status: "error",
      data: deletedProduct,
      message: "Could not find product with the given id",
    });
  }
};
