var mongoose = require('../db');
var productoSchema = {
	nombre:String,
	precio:Number,
	imagen:String
};

var Product =  mongoose.model("products", productoSchema);

module.exports = Product;
