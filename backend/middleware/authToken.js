const jwt = require("jsonwebtoken");

async function authToken(req, res, next) { // 'next', işlemin sonraki middleware veya kontrolcüye geçmesini sağlar.
  try {
    const token = req.cookies?.token;      // İstekle gelen çerezlerden 'token' bilgisini alır.

    console.log("token", token);
    if (!token) {
      return res.status(200).json({
        message: "Lütfen giriş yapın!",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) { // token doğrulanır.
      console.log(err);
      console.log("decoded", decoded);

      if (err) {
        console.log("error auth", err);
      }

      req.userId = decoded?._id; // Doğrulanmış token içindeki kullanıcı kimliği sonraki işlemler için kullanıcı bilgisini taşır.

      next();
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
