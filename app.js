//	╋╋┏┳━━━┳━━━┳━━━┳━━━┓
//	╋╋┃┃┏━┓┃┏━┓┃┏━┓┃┏━━┛
//	╋╋┃┃┃╋┃┃┗━┛┃┃╋┗┫┗━━┓
//	┏┓┃┃┃╋┃┃┏┓┏┫┃┏━┫┏━━┛
//	┃┗┛┃┗━┛┃┃┃┗┫┗┻━┃┗━━┓
//	┗━━┻━━━┻┛┗━┻━━━┻━━━┛ Gomez... 


console.log("Corriendo el servidor");

// Infortar las dependencias
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var cloudinary = require('cloudinary');
var password = "1234";

var app = express();
app.set("view engine","jade");  // definir que el engine que se usara para las vistas sera jade
app.use(express.static("public")); // definir la carpeta estatica

cloudinary.config({  // Configuracion de cloudinary
	cloud_name: "dalxumz5k",
	api_key: "447885593183574",
	api_secret: "zpm7tEIfu9rpg6PtUB1L5NT1YEc"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer({dest: "uploads"}));

/*----------------------------------------------------------------------*/
/* BASE DE DATOS*/
mongoose.connect('mongodb://localhost/elChingon');

var productoSchema = {  // Definir el schema de los productos
	nombre:String,
	precio:Number,
	imagen:String
};

//crear Modelo
var Producto = mongoose.model("productos", productoSchema);


app.listen(8888, function(){
	console.log("Servidor Arrancado");
});

app.get("/", function(req,res){
	res.render("index.jade");
});

app.get("/contacto", function(req, res){
	res.render("contacto.jade");
});


// Sistema
app.get("/login", function(req, res){
	res.render("login.jade");
});

app.post("/login", function(req, res){
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
});


/* Productos */

app.get("/menu", function(req, res){ // Consulta el munú
	Producto.find(function(error, data){
		if (error) {
			console.log(error);
		}else{
			console.log(data);
			res.render("menu.jade", {datos: data});
		}
	});
});


app.get("/nuevo-producto", function(req, res){ // Alta de producto
	res.render("menu/nuevo.jade");
});



app.post("/guardar-producto", function(req, res){ // Guardar un nuevo producto
	console.log(req.body);
	console.log(req.files.imagen.path);

	var data = {
		nombre:req.body.nombre,
		precio:req.body.precio
	}

	var producto = new Producto(data);
	
	console.log(producto);
	cloudinary.uploader.upload(req.files.imagen.path, function(resultado){
		producto.imagen = resultado.url;
		producto.save(function(err){
			console.log(resultado);
			console.log(producto);
		});
	});
	res.redirect("/administrar-productos");
});



app.get("/modificar-producto/:id", function(req, res){
	var idProducto = req.params.id;
	console.log(idProducto);
	Producto.findOne({"_id": idProducto}, function(error, datos){
	 	console.log(datos);
	 	res.render("menu/edita.jade", {medico: datos});
	});
});

app.post("/modificar-producto/:id", function(req, res){
	if (req.files.imagen) {
	cloudinary.uploader.upload(req.files.imagen.path, function(resultado){
		console.log(req.body);
		var data = {
			nombre:req.body.nombre,
			precio: req.body.precio,
			imagen: resultado.url
		}
		Producto.update({"_id": req.params.id}, data, function(producto){
			res.redirect("/administrar-productos");
		});
	});
	}else{
		console.log(req.body);
		var data = {
			nombre:req.body.nombre,
			precio: req.body.precio
		}
		Producto.update({"_id": req.params.id}, data, function(producto){
			res.redirect("/administrar-productos");
		});
	}
});


app.get("/eliminar-producto/:id", function(req, res){
	var id = req.params.id;
	Producto.findOne({"_id": id}, function(error, data){
		res.render("menu/eliminar.jade", {datos: data});
	});
});

app.post("/eliminar-producto/:id", function(req, res){
	var id = req.params.id;
	Producto.remove({"_id": id}, function(error){
		if (error) {
			console.log(erro)
		};
	});
	res.redirect("/administrar-productos");
});


app.get("/administrar-productos", function(req, res){ // panel de control
	Producto.find(function(error, data){
		if (error) {
			console.log(error);
		}else{
			//console.log(data);
			res.render("menu/administrar.jade", {datos: data});
		}
	});
});


function mostrarMedicos(req, res){
	Medico.find(function(error, datos){
		if (error) {
			console.log(error);
		}else{
			console.log(datos);
			res.render("menu/ver.jade", {data: datos});
		}
	});
}