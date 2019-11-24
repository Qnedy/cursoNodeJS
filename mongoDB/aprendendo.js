const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/firstdb', { useNewUrlParser: true }).then( () => {
    console.log("Conectado com sucesso!");
} ).catch( (err) => {
    console.log("Houve um erro " + err);
} );

