const Product = require('../models/Products');

const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        await newProduct.save();
        res.status(201).json('product created successfully')
    } catch (error) {
        res.status(500).json('faied to create the product')
    }
};

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find().sort({createAt: -1})
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json('failed to get the products')
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json('failed to get the product by id')   
    }
};

const searchProduct = async (req, res) => {
    try {
        const result = await Product.aggregate(
            [
                {
                  $search: {
                    index: "x1papp",
                    text: {
                      query: req.params.key,
                      path: {
                        wildcard: "*"
                      }
                    }
                  }
                }
              ]
        )
        res.status(201).json(result)
        console.log(result)
    } catch (error) {
        res.status(500).json('failed to search the products')
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    searchProduct,
}