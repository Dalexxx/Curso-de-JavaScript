const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

axios('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then((response) => console.log(response.data))
  .catch((erro) => console.log(erro));