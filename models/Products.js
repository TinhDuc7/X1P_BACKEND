const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({
    title: { type: String, require: true },
    supplier: { type: String, require: true },
    price: { type: String, require: true },
    imageUrl: { type: String, require: true },
    description: { type: String, require: true },
    product_location: {type: String, require: true},
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;

// module.export = mongoose.model('Product', ProductSchema);