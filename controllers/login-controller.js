const auth = require('../lib/auth');
// const Promise = require('bluebird')
const Product = require('../models/product');
const User = require('../models/user');

exports.loginForm = function(req, res) {
	res.render("login.jade");
}

exports.login = function(req, res) {
	let email = req.body.email;
	let password = req.body.password;
	console.log(email);
	console.log(password);
	let user = null;
	User.findOne({ email: email, password: password })
		.then(function(data) {
			console.log(data);
			if(!data) {
				return Promise.reject({ code: 'USER_NOT_EXIST', message: 'Usuario y/o contraseña incorrectos' });
			}
			req.session.user = data;
			console.log(req.session.user)
			return res.render("menu/administrar.jade", { products: data });
		})
		.catch(function(error) {
			console.log(error);
			if(error.code == 'USER_NOT_EXIST') {
				req.flash('error', 'El correo y/o contraseña son incorrectos');
				return res.redirect('/login');
			}
			return res.status(500).send({ code: 'DATABASE_ERROR', message: error.message });
		})
}
