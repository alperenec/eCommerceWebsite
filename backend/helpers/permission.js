const userModel = require("../models/userModel");

const uploadProductPermission = async (userId) => {
  // Kullanıcının ürün yükleme yetkisine sahip olup olmadığını kontrol
  const user = await userModel.findById(userId);

  if (user.role === "ADMIN") {
    return true;
  }

  return false;
};

module.exports = uploadProductPermission;
