const Cart = require("../models/cart");

exports.addToCart = async (req, res) => {
  try {
    const existingCartItem = await Cart.findOne({
      "cart.product": req.body.cart.product,
    });

    if (existingCartItem) {
      existingCartItem.cart.count += 1;
      const updatedCartItem = await existingCartItem.save();

      res.json({
        status: "success",
        data: updatedCartItem,
        message: "Product count updated in your cart",
      });
    } else {
      // If the product is not in the cart, add it
      const cartInstance = new Cart({ cart: req.body.cart });
      const savedCartItem = await cartInstance.save();

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

exports.deleteItemsFromCart = async (req, res) => {
  const productId = req.body.productId;

  try {
    await Cart.deleteOne({ _id: productId });
    res.status(201).json({
      status: "success",
      message: "Product successfully removed from your cart",
    });
  } catch (err) {
    console.log(err);
  }
};
