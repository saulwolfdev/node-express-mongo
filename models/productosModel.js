const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;

const MainSchema = new Schema({
    name:String,
    sku:String,
    description:String,
    price:Number,
    quantity:Number   
})

module.exports = mongoose.model('products',MainSchema)



