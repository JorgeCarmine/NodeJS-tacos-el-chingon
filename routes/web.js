var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login-controller');

router.get("/login", loginController.loginForm);

router.post("/login", loginController.login);


module.exports = router;