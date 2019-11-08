const express = require('express');
const app = express();
var handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');


//Config - Template engine
app.engine('handlebars', handlebars({extname: 'handlebars', defaultLayout: 'main', layoutsDir: './views/layouts'}));
app.set('view engine', 'handlebars');

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Rotas

app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('./layouts/home', {posts: posts});
    });
});

app.get('/cad', (req, res) => {
    res.render('./layouts/formulario');
});

app.post('/adicionar', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        res.send("Houve um erro: " + erro)
    });
});

app.get('/deletar/:id', (req, res) => {
    Post.destroy({where: {'id': req.params.id}}).then(() => {
        res.send("Postagem deletada com sucesso!");
    }).catch((erro) => {
        res.send("Essa postagem não existe! " + erro);
    });
});



// app.get('/', (req, res) => {
//     res.send("e ai cara");
// });

// app.get('/ola/:nome', (req, res) => {
//     res.send("ola " + req.params.nome);
// });

// app.get("/home", (req, res) => {
//     res.sendFile(__dirname + "/assets/home.html");
// });

// app.get("/sobre", (req, res) => {
//     res.sendFile(__dirname + "/assets/sobre.html");
// });

app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081");
});