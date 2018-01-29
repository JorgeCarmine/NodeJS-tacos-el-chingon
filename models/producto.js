var mongoose = require('../db');
var productoSchema = {
	nombre:String,
	precio:Number,
	imagen:String
};

var Producto =  mongoose.model("productos", productoSchema);

module.exports = Producto;
