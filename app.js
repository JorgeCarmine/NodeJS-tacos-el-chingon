console.log("Corriendo el servidor");

const path = require('path');
const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const web = require('./routes/web');

// const flash = require('connect-flash');
// const flash = require('express-flash-messages')

const app = express();

app.set("view engine","pug");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser('keyboard cat'));
app.use(session({
	secret: 'userSession',
	resave: true,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));
app.use(flash());


/**
app.use(session({
	secret: 'userSession',
	resave: true,
	saveUninitialized: true,
	cookie: { secure: true, maxAge: 60000 }
}));
 */

app.use('/', web);

app.listen(8888, function(){
	console.log("Servidor Arrancado");
});

//	╋╋┏┳━━━┳━━━┳━━━┳━━━┓
//	╋╋┃┃┏━┓┃┏━┓┃┏━┓┃┏━━┛
//	╋╋┃┃┃╋┃┃┗━┛┃┃╋┗┫┗━━┓
//	┏┓┃┃┃╋┃┃┏┓┏┫┃┏━┫┏━━┛
//	┃┗┛┃┗━┛┃┃┃┗┫┗┻━┃┗━━┓
//	┗━━┻━━━┻┛┗━┻━━━┻━━━┛ Gomez... 