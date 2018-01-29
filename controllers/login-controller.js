var Producto = require('../models/producto');

exports.loginForm = function(req, res) {
	res.render("login.jade");
}

exports.login = function(req, res) {
    var password = "1234";
    if (req.body.password == password) {
		Producto.find(function(error, data){
			if (error) {
				console.log(error);
			}else{
				console.log(data);
				res.render("menu/administrar.jade", {datos: data});
			}
		});		
	}else{
		res.end("El password es incorrecto");
	}
}
