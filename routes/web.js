const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page-controller');
const loginController = require('../controllers/login-controller');
const productsController = require('../controllers/products-controller');
const upload = require('../lib/multer');

router.get("/", pageController.index);

router.get("/login", loginController.loginForm);

router.post("/login", loginController.login);

router.get("/contacto", pageController.contacto);

/** Productos */
router.get("/menu", productsController.menu)

router.get("/nuevo-producto", productsController.create);

router.post("/guardar-producto", upload.single('imagen'), productsController.store);

router.get("/modificar-producto/:id", productsController.edit);

router.post("/modificar-producto/:id", upload.single('imagen'), productsController.update);

router.get("/eliminar-producto/:id", productsController.confirmDelete);

router.post("/eliminar-producto/:id", productsController.delete);

router.get("/administrar-productos", productsController.index);

module.exports = router;