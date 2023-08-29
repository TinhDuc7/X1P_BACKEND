const Order = require('../models/Order');

const getUserOrders = async (req, res) => {
    const userId = req.params.id;
    console.log(userId)
    try {
        const userOrders = await Order.find({ userId })
            .populate({
                path: 'productId',
                select: '-description -product_location'
            })
            .exec();
        console.log(userOrders)
        res.status(200).json(userOrders);
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getUserOrders,
}