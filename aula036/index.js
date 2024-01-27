// For in -> lê os índices ou chaves do objeto

// const frutas = ['Pera', 'Maçã', 'Uva']

// for (let i in frutas) {
//     console.log(i, frutas[i]);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let key in pessoa) {
    console.log(key, pessoa[key])
}