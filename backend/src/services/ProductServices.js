const Product = require("../model/product");

const AddProductService = async (data) => {
    const newProduct = new Product(data);
    const result = await newProduct.save();
    return result;
}
const GetAllProductsService = async () => {
    const result = await Product.find();
    return result;
}
const GetProductByIdService = async (id) => {
    const result = await Product.findById(id)
    return result;
}
const UpdateProductByIdService = async (id,data) => {
    const result = await Product.findByIdAndUpdate(id, data, { new: true });
    return result;
}
const DeleteProductByIdService = async (id) => {
    const result = await Product.findByIdAndDelete(id);
    return result;
}
const GetProductsByCategoryService = async (category) => {
    const result = await Product.find({ product_category: category });
    return result;
}
const SearchProductsService = async (query) => {
    const regex = new RegExp(query, 'i'); // 'i' for case-insensitive search
    const result = await Product.find({
        $or: [
            { product_name: regex },
            { product_desc: regex },
            { product_category: regex },
            { product_price: regex } // Assuming price is stored as a string, otherwise adjust accordingly
        ]
    });
    return result;
}
const GetProductsByPriceRangeService = async (minPrice, maxPrice) => {
    const result = await Product.find({
        product_price: { $gte: minPrice, $lte: maxPrice }
    });
    return result;
}
const GetProductsByPaginationService = async (page, limit) => {
    const skip = (page - 1) * limit;
    const result = await Product.find().skip(skip).limit(limit);
    return result;
}
module.exports = {
    AddProductService,
    GetAllProductsService,
    GetProductByIdService,
    UpdateProductByIdService,
    DeleteProductByIdService,
    GetProductsByCategoryService,
    SearchProductsService,
    GetProductsByPriceRangeService,
    GetProductsByPaginationService
};