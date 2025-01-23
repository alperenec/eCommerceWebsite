const mongoose = require('mongoose')

const addToCart = mongoose.Schema({
   productId : {
        ref : 'product',
        type : String,
   },
   quantity : Number,
   userId : String,
},{
    timestamps : true
})

 
const addToCartModel = mongoose.model("addToCart",addToCart) // 'addToCart' şeması, 'addToCart' adlı bir model olarak MongoDB'ye bağlanır.


module.exports = addToCartModel