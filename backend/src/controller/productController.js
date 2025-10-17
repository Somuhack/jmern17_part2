const ProductService = require("../services/ProductServices");
const clodinary = require("../config/cloudinary");
const fs = require("fs");
const addProduct = async (req, res) => {
  try {
    const { name, price, description, quntity, category } = req.body;

    // Validation
    if (!name || !price || !description || !quntity || !category) {
      return res
        .status(400)
        .json({ message: "Please fill all fields", success: false });
    }

    // ✅ Check if file exists before accessing req.file.path
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required", success: false });
    }

    // Upload image to Cloudinary
    const result = await clodinary.uploader.upload(req.file.path, {
      folder: "uploads",
    });

    // Prepare data
    const prepareData = {
      product_name: name,
      product_price: price,
      product_image: result.secure_url,
      product_desc: description,
      product_quntity: quntity,
      product_category: category,
    };

    // Save product via service
    const productData = await ProductService.AddProductService(prepareData);

    // Delete local file
    fs.unlinkSync(req.file.path);

    if (productData) {
      return res
        .status(201)
        .json({ message: "Product added successfully", success: true });
    } else {
      return res
        .status(500)
        .json({ message: "Product not added", success: false });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const alldata = await ProductService.GetAllProductsService();
    return res
      .status(200)
      .json({ msg: "Data Feched Successfully", data: alldata, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", success: false });
  }
};
const deleteProduct = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(404).json({ msg: "Id Not Found" });
    }
    const isProductdeleted = await ProductService.DeleteProductByIdService(
      req.params.id
    );
    if (!isProductdeleted) {
      return res
        .status(404)
        .json({ msg: "Data Deleted Failed", success: false });
    }
    return res
      .status(200)
      .json({ msg: "Data Deleted successfully", success: true });
  } catch (error) {}
};
const updateProducrData = async (req, res) => {
  try {
    const updateData = req.body;
    if (!req.params.id) {
        return res.status(404).json({ msg: "Id Not Found" });
      }
    if (req.file.path) {
      const result = await clodinary.uploader.upload(req.file.path, {
        folder: "uploads",
      });
      updateData.image = result.secure_url;

      const isUpdated = await ProductService.UpdateProductByIdService(
        id,
        updateData
      );

      if (!isUpdated) {
        return res.status(404).json({ msg: "Update Faield" });
      }
    }
    

    return res.status(200).json({
      msg: "Data Update Successfully",
      data: isUpdated,
      success: true,
    });
  } catch (error) {}
};
module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProducrData,
};
