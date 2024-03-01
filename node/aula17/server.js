//pega o env para esconder coisas na hora de postar no git
require('dotenv').configDotenv();

//express
const express = require('express');
const app = express();

//moongose - é quem vai modelar a base de dados e garantir que os dados 
//que a gente salve seja realmente os dados da forma que a gente quer salvar
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

// session/seções geralmente é para identificar o navegador de um cliente    
const session = require('express-session');
//Para falar que as seções vão ser salvar no banco de dados (por padrão elas são salvas em memória)
const MongoStore = require('connect-mongo');
// Mensagens autodestrutivas (bom pra mandar mensagens de erro) / salvas em seção
const flash = require('connect-flash');
// Rotas da nossa seção (ex.: /home  /contato)
const routes = require('./routes');
//Path: para trabalhar com caminhos
const path = require('path');
//Recomendação do pessoal do express (pode ajudar a proteger o seu aplicativo de algumas
//vulnerabilidades da web bastante conhecidas configurando os cabeçalhos HTTP adequadamente.)
const helmet = require('helmet');
// tokens que a gente cria para os nossos formularios(faz com que nenhum app/site externo
// consiga postar coisas para dentro da nossa aplicação) - segurança
const csrf = require('csurf');
// middlewares = funções que são executadas na rota
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'adasfa434f34f435',
    //store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //7 dias em miliseg
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
