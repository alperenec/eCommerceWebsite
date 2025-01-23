const addToCartModel = require("../../models/cartProduct");

const countAddToCartProduct = async (req, res) => {
  try {
    const userId = req.userId;
    // İstekten gelen oturum açmış kullanıcının kimliği alınır.

    const count = await addToCartModel.countDocuments({
      userId: userId,
      // Sepette kullanıcıya ait ürünlerin toplam sayısı sorgulanır.
    });

    res.json({
      data: {
        count: count,
        // Sepetteki ürünlerin sayısı döndürülür.
      },
      message: "Tamamlandı",
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: false,
      success: false,
    });
  }
};

module.exports = countAddToCartProduct;
