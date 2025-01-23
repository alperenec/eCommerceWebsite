const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI); //MongoDB'ye bağlanılıyor. Bağlantı URL'si .env den alınır.
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
