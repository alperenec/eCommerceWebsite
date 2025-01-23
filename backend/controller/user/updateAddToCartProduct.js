const addToCartModel = require("../../models/cartProduct");
// Sepet ürünlerini temsil eden Mongoose modeli içe aktarılıyor.

const updateAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.userId;
    // kullanıcının kimliği alınıyor.

    const addToCartProductId = req?.body?._id;
    // ürünün ID'si alınır.

    const qty = req.body.quantity;
    // Güncellenecek ürün miktarı alınır.

    const updateProduct = await addToCartModel.updateOne(
      { _id: addToCartProductId },
      // Güncellenecek ürün ID'si ile sorgulanır.
      {
        ...(qty && { quantity: qty }),
        // Eğer `quantity` değeri varsa, bu alan güncellenir.
      }
    );

    res.json({
      message: "Ürün güncellendi",
      data: updateProduct,
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = updateAddToCartProduct;
