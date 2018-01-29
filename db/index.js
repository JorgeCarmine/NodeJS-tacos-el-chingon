var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/elChingon', { useMongoClient: true });

module.exports = mongoose;