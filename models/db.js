const Sequelize = require('sequelize');

//Conexão com DB Mysql
const sequelize = new Sequelize('postapp', 'root', 'esquec1kkk', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}