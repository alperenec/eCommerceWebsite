const addToCartModel = require("../../models/cartProduct");

const addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req.userId;

    const isProductAvailable = await addToCartModel.findOne({ productId });
    // Sepette bu ürünün olup olmadığı kontrol ediliyor.

    if (isProductAvailable) {
      return res.json({
        message: "Ürün zaten sepette var",
        success: false,
        error: true,
      });
    }

    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };

    const newAddToCart = new addToCartModel(payload);
    const saveProduct = await newAddToCart.save();
    // Ürün veritabanına kaydediliyor.

    return res.json({
      data: saveProduct,
      message: "Ürün sepete eklendi",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartController;
