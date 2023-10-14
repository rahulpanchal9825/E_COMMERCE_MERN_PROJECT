const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title:String,
    img:String,
    desc:String,
    price:Number,
    categories:String,
    stock:Number,
    // id:mongoose.Collection.
})
module.exports = mongoose.model('products',ProductsSchema)
 