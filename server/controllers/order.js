const { Order } = require("../models/order");

exports.addOrder = async (req, res) => {
  req.body.order.user = req.profile;
  try{
    const newOrder = await Order.create(req.body.order);
    res.json(newOrder);
  }catch(err){
    console.log(err)
  }
};

exports.getAllOrders = async(req,res) => {
    try{
        const orders = await Order.find().populate("user", "name");
        res.json(orders)
    }catch(err){
        console.log(err)
    }
}

exports.getOrdersByUser = async(req, res) => {
    try{

    }catch(err){
        
    }
}