const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua:'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
//const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
const { nome, ...resto } = pessoa;
console.log(nome, resto);