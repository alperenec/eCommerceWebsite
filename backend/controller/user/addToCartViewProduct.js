const addToCartModel = require("../../models/cartProduct"); 

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req.userId; 
    // Oturum açmış kullanıcının kimliği alınır.

    const allProduct = await addToCartModel.find({
      userId: currentUser, 
      // Kullanıcının sepetindeki ürünler sorgulanır.
    }).populate("productId"); 
    // 'productId' alanı detaylarıyla birlikte doldurulur (populate).

    res.json({
      data: allProduct, 
      // Sepetteki ürünler istemciye gönderilir.
      success: true,
      error: false,
    });

  } catch (err) {
    res.json({
      message: err.message || err, 
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartViewProduct; 
