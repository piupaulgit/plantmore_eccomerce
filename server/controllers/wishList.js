const wishList = require("../models/wishList");

exports.addToWishList = async (req, res) => {
  try {
    const { product } = req.body.wishList;
    const existingWishListItem = await wishList.findOne({ product });

    if (existingWishListItem) {
      res.json({
        status: "success",
        message: "Product already added in the wishlist",
      });
    } else {
      const savedWishListItem = await wishList.create(req.body.wishList);

      res.json({
        status: "success",
        data: savedWishListItem,
        message: "Product added into your wishlist",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.getAllWishListItems = async (req, res) => {
  try {
    const wishListItems = await wishList.find().populate("product", "name");
    res.json({
      status: "success",
      data: wishListItems,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.deleteItemsFromWishList = async (req, res) => {
  const { product } = req.body;
  const existingWishListItem = await wishList.findOne({ product });

  if (existingWishListItem) {
    const deletedProduct = await existingWishListItem.deleteOne();
    res.json({
      status: "success",
      data: deletedProduct,
      message: "Product deleted from your wishlist",
    });
  } else {
    res.json({
      status: "error",
      message: "Could not find product with the given id",
    });
  }
};
