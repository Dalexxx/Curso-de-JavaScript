// Filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMais50 = pessoas.filter(obj => obj.idade > 50);
const pessoasTerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMais50);
console.log(pessoasTerminaA);


//rascunhos
//const numerosFiltrados = numeros.filter((valor, indice, array) => {
//    console.log(valor, indice, array)
//    return valor > 10
//});
// function callbackFilter(valor) {
//     return valor > 10; //same thing de baixo
//     // if (valor > 10) return true;
//     // else return false;
// }

// const numeros10 = [];
// for (numero of numeros) {
//     if (numero > 10) {
//         numeros10.push(numero)
//     }
// }
// console.log(numeros10)