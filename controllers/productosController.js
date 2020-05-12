var productosModel = require("../models/productosModel")

module.exports = {
    getAll: async function(req, res, next) {
        let productos = await productosModel.find({})
        console.log(productos)
        res.status(200).json(productos)
      },
    
    getDestados: async function(req, res, next) {
        let productos = await productosModel.find({'destacado':1})
        console.log(productos)
        res.status(200).json(productos)
    },
    getById: async function(req, res, next) {
        console.log(req.params.id)
        let productos = await productosModel.findById(req.params.id)
        console.log(productos)
        res.status(200).json(productos)
    },
    create: async function(req, res, next) {
        let producto = new productosModel({
            name: req.body.name, 
            description:req.body.description,
            sku: req.body.sku, 
            price: req.body.price,
            quantity:req.body.quantity
        })
        let data = await producto.save();
        res.status(201).json({"stauts":"ok","data":data})
    }  
}