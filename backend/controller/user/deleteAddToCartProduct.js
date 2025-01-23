const addToCartModel = require("../../models/cartProduct");

const deleteAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.userId;

    const addToCartProductId = req.body._id;
    // İstemciden gelen, silinecek ürünün ID'si alınır.

    const deleteProduct = await addToCartModel.deleteOne({
      _id: addToCartProductId,
      // Veritabanında belirtilen ID'ye sahip ürün silinir.
    });

    res.json({
      message: "Ürün sepetten silindi",
      error: false,
      success: true,
      data: deleteProduct,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = deleteAddToCartProduct;
