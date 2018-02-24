const cloudinary = require('cloudinary');
const Product = require('../models/product');

// Configuracion de cloudinary
 cloudinary.config({
	cloud_name: "dalxumz5k",
	api_key: "447885593183574",
	api_secret: "zpm7tEIfu9rpg6PtUB1L5NT1YEc"
});

exports.menu = function(req, res){ // Consulta el munú
	Product.find(function(error, data){
		if (error) {
			console.log(error);
		}else{
			console.log(data);
			res.render("menu.jade", { products: data });
		}
	});
}

exports.create = function(req, res) {
	res.render("menu/nuevo.jade");
}

exports.store = function(req, res) {
	console.log(req.body);
	console.log(req.file.path);

	var data = {
		nombre:req.body.nombre,
		precio:req.body.precio
	}

	var product = new Product(data);
	
	console.log(product);
	cloudinary.uploader.upload(req.file.path, function(resultado){
		product.imagen = resultado.url;
		product.save(function(err){
			console.log(resultado);
			console.log(product);
		});
	});
	 return res.redirect("/administrar-productos");
}

exports.edit = function(req, res){
	var idProducto = req.params.id;
	console.log(idProducto);
	Product.findOne({"_id": idProducto}, function(error, datos){
	 	console.log(datos);
	 	res.render("menu/edita.jade", {medico: datos});
	});
}

exports.update = function(req, res){
	if (req.file) {
		cloudinary.uploader.upload(req.file.path, function(resultado){
			console.log(req.body);
			var data = {
				nombre:req.body.nombre,
				precio: req.body.precio,
				imagen: resultado.url
			}
		});
	}else{
		console.log(req.body);
		var data = {
			nombre:req.body.nombre,
			precio: req.body.precio
		}
	}
	Product.update({"_id": req.params.id}, data, function(producto){
		res.redirect("/administrar-productos");
	});
}

exports.confirmDelete = function(req, res){
	var id = req.params.id;
	Product.findOne({"_id": id}, function(error, data){
		res.render("menu/eliminar.jade", {datos: data});
	});
}

exports.delete = function(req, res){
	var id = req.params.id;
	Product.remove({"_id": id}, function(error) {
		if (error) {
			console.log(erro)
		};
	});
	res.redirect("/administrar-productos");
}

exports.index = function(req, res) { // panel de control
	Product.find(function(error, data){
		if (error) {
			console.log(error);
		}else{
			//console.log(data);
			res.render("menu/administrar.jade", { products: data });
		}
	});
}
