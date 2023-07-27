const mongoose = require('mongoose');

let dbUsername = process.env.DB_USERNAME;
let dbPassword = process.env.DB_PASSWORD;
let dbHost = process.env.DB_HOST;

let connectionString = `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/tacos_el_chingon?retryWrites=true&w=majority`;

mongoose.connect(connectionString);

// mongoose.connect('mongodb://localhost/elChingon', { useMongoClient: true });

module.exports = mongoose;